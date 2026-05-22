export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  isObserver: boolean;
  joinedAt: number;
}

export type CardSetType = 'fibonacci' | 'short' | 'custom';

export interface CardSet {
  type: CardSetType;
  values: number[];
}

export interface Vote {
  userId: string;
  value: number;
  timestamp: number;
}

export interface Room {
  id: string;
  adminId: string;
  users: User[];
  votes: Vote[];
  revealedVotes: boolean;
  revealed: boolean;
  cardSet: CardSet;
  createdAt: number;
  updatedAt: number;
}

export interface SocketEvents {
  'create-room': (data: { userId: string; userName: string }) => void;
  'join-room': (data: { roomId: string; userId: string; userName: string; isObserver?: boolean }) => void;
  'vote': (data: { roomId: string; userId: string; value: number }) => void;
  'reveal-votes': (data: { roomId: string; adminId: string }) => void;
  'reset-votes': (data: { roomId: string; adminId: string }) => void;
  'update-cards': (data: { roomId: string; adminId: string; cardSet: CardSet }) => void;
  'toggle-observer': (data: { roomId: string; userId: string; isObserver: boolean }) => void;
  'leave-room': (data: { roomId: string; userId: string }) => void;
  'close-room': (data: { roomId: string; adminId: string }) => void;
  'update-name': (data: { roomId: string; userId: string; newName: string }) => void;
  'start-timer': (data: { roomId: string; duration: number }) => void;
  'pause-timer': (data: { roomId: string }) => void;
  'resume-timer': (data: { roomId: string }) => void;
  'reset-timer': (data: { roomId: string }) => void;
  'room-created': (data: Room) => void;
  'room-joined': (data: Room) => void;
  'user-joined': (data: { room: Room; user: User }) => void;
  'user-left': (data: { roomId: string; userId: string; room: Room }) => void;
  'vote-submitted': (data: { roomId: string; vote: Vote }) => void;
  'votes-revealed': (data: { roomId: string; votes: Vote[]; room: Room }) => void;
  'votes-reset': (data: { roomId: string; room: Room }) => void;
  'cards-updated': (data: { roomId: string; cardSet: CardSet; room: Room }) => void;
  'observer-toggled': (data: { roomId: string; userId: string; isObserver: boolean; room: Room }) => void;
  'room-closed': (data: { roomId: string; adminId: string; message: string }) => void;
  'name-updated': (data: { roomId: string; userId: string; newName: string; room: Room }) => void;
  'timer-started': (data: { roomId: string; duration: number }) => void;
  'timer-paused': (data: { roomId: string }) => void;
  'timer-resumed': (data: { roomId: string }) => void;
  'timer-reset': (data: { roomId: string }) => void;
  'error': (data: { message: string; type?: string }) => void;
  'user-count': (data: { roomId: string; count: number }) => void;
}

export interface LocalStorageData {
  userId: string;
  userName: string;
  isObserver: boolean;
}
