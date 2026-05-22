import type { User, Vote, Room, CardSet } from '@/types';

export type TimerStatus = 'idle' | 'running' | 'paused' | 'finished';

export interface TimerState {
  status: TimerStatus;
  remaining: number; // seconds
  duration: number; // total seconds
}

export interface UseTimerReturn {
  timer: TimerState;
  formattedTime: string;
  progress: number;
  start: (seconds: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

export interface TimerDisplayProps {
  formattedTime: string;
  status: TimerStatus;
  progress: number;
  isPopupOpen: boolean;
  onClick: () => void;
}

export interface TimerPopupProps {
  timer: TimerState;
  formattedTime: string;
  progress: number;
  hasVotes: boolean;
  onStart: (seconds: number) => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

export interface RoomProps {
  roomId: string;
}

export interface HeaderProps {
  roomId: string;
  userName: string;
  isObserver: boolean;
  isAdmin: boolean;
  cardSet: CardSet;
  onToggleObserver: () => void;
  onUpdateUserName: (name: string) => void;
  onUpdateCardSet: (cardSet: CardSet) => void;
  onRevealVotes: () => void;
  hasVotes: boolean;
  onCloseRoom: () => void;
  onLogout: () => void;
}

export interface UserPopupProps {
  userName: string;
  roomId: string;
  isObserver: boolean;
  isAdmin: boolean;
  onToggleObserver: () => void;
  onSaveName: (name: string) => void;
  onOpenCardSetModal: () => void;
  onCloseRoom: () => void;
  onLogout: () => void;
}

export interface CardSetModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardSet: CardSet;
  onUpdateCardSet: (cardSet: CardSet) => void;
}

export interface SidebarProps {
  users: User[];
  votes: Vote[];
  revealed: boolean;
  currentUserId: string;
}

export interface VotingAreaProps {
  room: Room;
  currentUser: User;
  votes: Vote[];
  onRevealVotes: () => void;
  onResetVotes: () => void;
  isAdmin: boolean;
  revealed: boolean;
}

export interface CardSelectorProps {
  cardSet: CardSet;
  onVote: (value: number) => void;
  currentUserVote: Vote | undefined;
  isObserver: boolean;
  revealed: boolean;
}
