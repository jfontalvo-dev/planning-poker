import { create } from 'zustand';
import { Room, User, Vote, CardSet } from '@/types';

interface RoomStore {
  // Estado
  room: Room | null;
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;

  // Acciones
  setRoom: (room: Room) => void;
  setCurrentUser: (user: User) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Acciones de sala
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  updateUser: (user: User) => void;
  
  // Acciones de votos
  addVote: (vote: Vote) => void;
  revealVotes: () => void;
  resetVotes: () => void;
  
  // Acciones de cartas
  updateCardSet: (cardSet: CardSet) => void;
  
  // Limpiar
  clearRoom: () => void;
}

export const useRoomStore = create<RoomStore>((set) => ({
  // Estado inicial
  room: null,
  currentUser: null,
  isLoading: false,
  error: null,

  // Setters directos
  setRoom: (room) => set({ room }),
  setCurrentUser: (currentUser) => set({ currentUser }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  // Acciones de sala
  addUser: (user) =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            users: [...state.room.users, user],
            updatedAt: Date.now(),
          }
        : null,
    })),

  removeUser: (userId) =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            users: state.room.users.filter((u) => u.id !== userId),
            updatedAt: Date.now(),
          }
        : null,
    })),

  updateUser: (user) =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            users: state.room.users.map((u) => (u.id === user.id ? user : u)),
            updatedAt: Date.now(),
          }
        : null,
    })),

  // Acciones de votos
  addVote: (vote) =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            votes: [
              ...state.room.votes.filter((v) => v.userId !== vote.userId),
              vote,
            ],
            updatedAt: Date.now(),
          }
        : null,
    })),

  revealVotes: () =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            revealed: true,
            updatedAt: Date.now(),
          }
        : null,
    })),

  resetVotes: () =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            votes: [],
            revealed: false,
            updatedAt: Date.now(),
          }
        : null,
    })),

  // Acciones de cartas
  updateCardSet: (cardSet) =>
    set((state) => ({
      room: state.room
        ? {
            ...state.room,
            cardSet,
            updatedAt: Date.now(),
          }
        : null,
    })),

  // Limpiar
  clearRoom: () => set({ room: null, currentUser: null }),
}));
