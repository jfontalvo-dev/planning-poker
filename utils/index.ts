import { LocalStorageData } from '@/types';

const STORAGE_KEY = 'planning-poker-user';
const ROOM_KEY = 'planning-poker-room';

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const generateRoomId = (): string => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const localStorage = {
  getUser: (): LocalStorageData | null => {
    if (typeof window === 'undefined') return null;
    try {
      const data = window.localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  setUser: (data: LocalStorageData): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  },

  clearUser: (): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing localStorage:', e);
    }
  },

  getRoomId: (): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return window.localStorage.getItem(ROOM_KEY);
    } catch {
      return null;
    }
  },

  setRoomId: (roomId: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(ROOM_KEY, roomId);
    } catch (e) {
      console.error('Error saving roomId to localStorage:', e);
    }
  },

  clearRoomId: (): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(ROOM_KEY);
    } catch (e) {
      console.error('Error clearing roomId from localStorage:', e);
    }
  },
};

export const cardSetPresets = {
  fibonacci: {
    type: 'fibonacci' as const,
    values: [0, 1, 2, 3, 5, 8, 13, 21],
  },
  short: {
    type: 'short' as const,
    values: [1, 2, 3, 5, 8],
  },
};
