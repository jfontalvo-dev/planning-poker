import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import type { Room, User, Vote, CardSet, UserRole } from '../types/index.js';

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
    methods: ['GET', 'POST'],
    credentials: true,
  },
  transports: ['websocket', 'polling'],
});

// ============================================================================
// ESTADO GLOBAL
// ============================================================================

const rooms = new Map<string, Room>();

// ============================================================================
// TIPOS DE DATOS PARA EVENTOS
// ============================================================================

interface CreateRoomData {
  userId: string;
  userName: string;
}

interface JoinRoomData {
  roomId: string;
  userId: string;
  userName: string;
  isObserver?: boolean;
}

interface VoteData {
  roomId: string;
  userId: string;
  value: number;
}

interface AdminActionData {
  roomId: string;
  adminId: string;
}

interface UpdateCardsData extends AdminActionData {
  cardSet: CardSet;
}

interface ToggleObserverData {
  roomId: string;
  userId: string;
  isObserver: boolean;
}

interface UpdateNameData {
  roomId: string;
  userId: string;
  newName: string;
}

interface LeaveRoomData {
  roomId: string;
  userId: string;
}

// ============================================================================
// UTILIDADES
// ============================================================================

const generateRoomId = (): string => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

// ============================================================================
// EVENT HANDLERS
// ============================================================================

io.on('connection', (socket: Socket) => {
  console.log('👤 User connected:', socket.id);

  // Crear nueva sala
  socket.on('create-room', (data: CreateRoomData) => {
    try {
      const roomId = generateRoomId();
      const user: User = {
        id: data.userId,
        name: data.userName,
        role: 'admin',
        isObserver: false,
        joinedAt: Date.now(),
      };

      const room: Room = {
        id: roomId,
        adminId: data.userId,
        users: [user],
        votes: [],
        revealedVotes: false,
        revealed: false,
        cardSet: {
          type: 'fibonacci',
          values: [0, 1, 2, 3, 5, 8, 13, 21],
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      rooms.set(roomId, room);
      socket.join(roomId);
      socket.emit('room-created', room);
      console.log(`✨ Room created: ${roomId} by ${data.userName}`);
    } catch (error) {
      console.error('❌ Error creating room:', error);
      socket.emit('error', { message: 'Failed to create room' });
    }
  });

  // Unirse a una sala existente
  socket.on('join-room', (data: JoinRoomData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found' });
        console.warn(`⚠️  Room not found: ${data.roomId}`);
        return;
      }

      // Límite de 20 usuarios por sala
      const isReconnect = room.users.some((u) => u.id === data.userId);
      if (!isReconnect && room.users.length >= 20) {
        socket.emit('error', { message: 'Room is full (max 20 users)' });
        console.warn(`⚠️  Room full: ${data.roomId}`);
        return;
      }

      // Si el usuario ya existe en la sala, solo reune
      const existingUser = room.users.find((u) => u.id === data.userId);
      if (existingUser) {
        existingUser.isObserver = data.isObserver ?? existingUser.isObserver;
        room.updatedAt = Date.now();
        rooms.set(data.roomId, room);
        socket.join(data.roomId);
        socket.emit('room-joined', room);
        console.log(`🔄 User reconnected: ${data.userName} to ${data.roomId}`);
        return;
      }

      // Agregar nuevo usuario
      const user: User = {
        id: data.userId,
        name: data.userName,
        role: 'user',
        isObserver: data.isObserver ?? false,
        joinedAt: Date.now(),
      };

      room.users.push(user);
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      socket.join(data.roomId);
      socket.emit('room-joined', room);
      io.to(data.roomId).emit('user-joined', { room, user });

      console.log(`👋 User joined: ${data.userName} to ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error joining room:', error);
      socket.emit('error', { message: 'Failed to join room' });
    }
  });

  // Enviar voto
  socket.on('vote', (data: VoteData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found' });
        return;
      }

      if (room.revealed) {
        socket.emit('error', { message: 'Votes are already revealed' });
        return;
      }

      const user = room.users.find((u) => u.id === data.userId);
      if (!user || user.isObserver) {
        socket.emit('error', { message: 'User cannot vote' });
        console.warn(`⚠️  Vote attempt by non-voter: ${data.userId}`);
        return;
      }

      const vote: Vote = {
        userId: data.userId,
        value: data.value,
        timestamp: Date.now(),
      };

      // Reemplazar voto anterior si existe
      room.votes = room.votes.filter((v) => v.userId !== data.userId);
      room.votes.push(vote);
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('vote-submitted', { roomId: data.roomId, vote });
      console.log(`🗳️  Vote: ${user.name} → ${data.value} in ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error voting:', error);
      socket.emit('error', { message: 'Failed to vote' });
    }
  });

  // Revelar votos (solo admin)
  socket.on('reveal-votes', (data: AdminActionData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room || room.adminId !== data.adminId) {
        socket.emit('error', { message: 'Unauthorized' });
        console.warn(`⚠️  Unauthorized reveal attempt: ${data.adminId}`);
        return;
      }

      room.revealed = true;
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('votes-revealed', {
        roomId: data.roomId,
        votes: room.votes,
        room,
      });

      console.log(`📊 Votes revealed in ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error revealing votes:', error);
      socket.emit('error', { message: 'Failed to reveal votes' });
    }
  });

  // Reiniciar votación (solo admin)
  socket.on('reset-votes', (data: AdminActionData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room || room.adminId !== data.adminId) {
        socket.emit('error', { message: 'Unauthorized' });
        return;
      }

      room.votes = [];
      room.revealed = false;
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('votes-reset', { roomId: data.roomId, room });
      console.log(`🔄 Votes reset in ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error resetting votes:', error);
      socket.emit('error', { message: 'Failed to reset votes' });
    }
  });

  // Actualizar cartas (solo admin)
  socket.on('update-cards', (data: UpdateCardsData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room || room.adminId !== data.adminId) {
        socket.emit('error', { message: 'Unauthorized' });
        return;
      }

      room.cardSet = data.cardSet;
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('cards-updated', {
        roomId: data.roomId,
        cardSet: data.cardSet,
        room,
      });

      console.log(`🃏 Cards updated: ${data.cardSet.type} in ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error updating cards:', error);
      socket.emit('error', { message: 'Failed to update cards' });
    }
  });

  // Actualizar nombre de usuario
  socket.on('update-name', (data: UpdateNameData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found', type: 'ROOM_NOT_FOUND' });
        return;
      }

      const user = room.users.find((u) => u.id === data.userId);
      if (!user) {
        socket.emit('error', { message: 'User not found', type: 'USER_NOT_FOUND' });
        return;
      }

      user.name = data.newName;
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('name-updated', {
        roomId: data.roomId,
        userId: data.userId,
        newName: data.newName,
        room,
      });

      console.log(`✏️  Name updated: ${data.userId} → ${data.newName} in ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error updating name:', error);
      socket.emit('error', { message: 'Failed to update name', type: 'UPDATE_NAME_ERROR' });
    }
  });

  // Cambiar estado observador
  socket.on('toggle-observer', (data: ToggleObserverData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found', type: 'ROOM_NOT_FOUND' });
        return;
      }

      const user = room.users.find((u) => u.id === data.userId);
      if (!user) {
        socket.emit('error', { message: 'User not found', type: 'USER_NOT_FOUND' });
        return;
      }

      user.isObserver = data.isObserver;
      
      // Remove votes when becoming observer
      if (data.isObserver) {
        room.votes = room.votes.filter((v) => v.userId !== data.userId);
      }
      
      room.updatedAt = Date.now();
      rooms.set(data.roomId, room);

      io.to(data.roomId).emit('observer-toggled', {
        roomId: data.roomId,
        userId: data.userId,
        isObserver: data.isObserver,
        room,
      });

      console.log(`👁️ Observer toggled: ${user.name} → ${data.isObserver}`);
    } catch (error) {
      console.error('❌ Error toggling observer:', error);
      socket.emit('error', { message: 'Failed to toggle observer', type: 'TOGGLE_OBSERVER_ERROR' });
    }
  });

  // Salir de la sala
  socket.on('leave-room', (data: LeaveRoomData) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found' });
        return;
      }

      const isAdmin = room.adminId === data.userId;
      room.users = room.users.filter((u) => u.id !== data.userId);
      room.votes = room.votes.filter((v) => v.userId !== data.userId);

      if (room.users.length === 0) {
        rooms.delete(data.roomId);
        console.log(`🗑️  Room deleted (empty): ${data.roomId}`);
      } else if (isAdmin) {
        // Assign admin to a random remaining user
        const randomIndex = Math.floor(Math.random() * room.users.length);
        const newAdmin = room.users[randomIndex];
        newAdmin.role = 'admin';
        room.adminId = newAdmin.id;
        room.updatedAt = Date.now();
        rooms.set(data.roomId, room);

        io.to(data.roomId).emit('user-left', {
          roomId: data.roomId,
          userId: data.userId,
          room,
        });
        console.log(`👑 New admin assigned: ${newAdmin.name} in ${data.roomId}`);
      } else {
        room.updatedAt = Date.now();
        rooms.set(data.roomId, room);
        io.to(data.roomId).emit('user-left', {
          roomId: data.roomId,
          userId: data.userId,
          room,
        });
      }

      socket.leave(data.roomId);
      console.log(`👋 User left: ${data.userId} from ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error leaving room:', error);
      socket.emit('error', { message: 'Failed to leave room' });
    }
  });

  // Cerrar sala (solo admin)
  socket.on('close-room', (data: { roomId: string; adminId: string }) => {
    try {
      const room = rooms.get(data.roomId);
      if (!room) {
        socket.emit('error', { message: 'Room not found', type: 'ROOM_NOT_FOUND' });
        return;
      }

      if (room.adminId !== data.adminId) {
        socket.emit('error', { message: 'Only admin can close room', type: 'PERMISSION_DENIED' });
        console.warn(`⚠️  Unauthorized close attempt: ${data.adminId}`);
        return;
      }

      // Notificar a todos en la sala que se cerró
      io.to(data.roomId).emit('room-closed', {
        roomId: data.roomId,
        adminId: data.adminId,
        message: 'La sala ha sido cerrada por el administrador',
      });

      // Eliminar la sala
      rooms.delete(data.roomId);
      console.log(`🔥 Room closed by admin: ${data.roomId}`);
    } catch (error) {
      console.error('❌ Error closing room:', error);
      socket.emit('error', { message: 'Failed to close room', type: 'CLOSE_ROOM_ERROR' });
    }
  });

  // Usuario desconectado
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });

  // ========== TIMER EVENTS ==========

  socket.on('start-timer', (data: { roomId: string; duration: number }) => {
    io.to(data.roomId).emit('timer-started', {
      roomId: data.roomId,
      duration: data.duration,
    });
  });

  socket.on('pause-timer', (data: { roomId: string }) => {
    io.to(data.roomId).emit('timer-paused', { roomId: data.roomId });
  });

  socket.on('resume-timer', (data: { roomId: string }) => {
    io.to(data.roomId).emit('timer-resumed', { roomId: data.roomId });
  });

  socket.on('reset-timer', (data: { roomId: string }) => {
    io.to(data.roomId).emit('timer-reset', { roomId: data.roomId });
  });
});

// ============================================================================
// RUTAS HTTP
// ============================================================================

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    rooms: rooms.size,
  });
});

app.get('/api/rooms', (_req: Request, res: Response) => {
  const roomsList = Array.from(rooms.values()).map((room) => ({
    id: room.id,
    adminId: room.adminId,
    usersCount: room.users.length,
    votesCount: room.votes.length,
    revealed: room.revealed,
    createdAt: new Date(room.createdAt).toISOString(),
  }));

  res.json({ rooms: roomsList, total: roomsList.length });
});

// ============================================================================
// START SERVER
// ============================================================================

httpServer.listen(PORT, () => {
  console.log(`\n🚀 Planning Poker Server`);
  console.log(`📍 Socket.IO running on port ${PORT}`);
  console.log(`🌐 CORS origin: ${CORS_ORIGIN}`);
  console.log(`✅ Health check: http://localhost:${PORT}/health\n`);
});
