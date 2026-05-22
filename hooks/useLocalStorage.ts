'use client';

import { useCallback, useEffect, useState } from 'react';
import { LocalStorageData } from '@/types';
import { localStorage } from '@utils';

const subscribers = new Set<(data: LocalStorageData | null) => void>();

const notify = (data: LocalStorageData | null) => {
  subscribers.forEach((cb) => cb(data));
};

export const useLocalStorage = () => {
  const [user, setUser] = useState<LocalStorageData | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getUser();
    const savedRoomId = localStorage.getRoomId();
    setUser(userData);
    setRoomId(savedRoomId);
    setIsLoading(false);

    subscribers.add(setUser);
    return () => {
      subscribers.delete(setUser);
    };
  }, []);

  const saveUser = useCallback((userData: LocalStorageData) => {
    localStorage.setUser(userData);
    setUser(userData);
    notify(userData);
  }, []);

  const clearUser = useCallback(() => {
    localStorage.clearUser();
    setUser(null);
    notify(null);
  }, []);

  const saveRoom = useCallback((id: string) => {
    localStorage.setRoomId(id);
    setRoomId(id);
  }, []);

  const clearRoom = useCallback(() => {
    localStorage.clearRoomId();
    setRoomId(null);
  }, []);

  const setObserver = useCallback((isObserver: boolean) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, isObserver };
      localStorage.setUser(updated);
      notify(updated);
      return updated;
    });
  }, []);

  return { user, roomId, isLoading, saveUser, clearUser, saveRoom, clearRoom, setObserver };
};
