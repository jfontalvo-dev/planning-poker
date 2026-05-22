'use client';

import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

let globalSocket: Socket | null = null;

const getSocket = (): Socket => {
  if (!globalSocket) {
    const socketUrl =
      process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';
    globalSocket = io(socketUrl, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      transports: ['websocket', 'polling'],
    });
  }
  return globalSocket;
};

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = getSocket();

    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);

    if (socket.connected) {
      setIsConnected(true);
    }

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
    };
  }, []);

  const on = useCallback((event: string, callback: (...args: any[]) => void) => {
    if (!globalSocket) return;
    globalSocket.on(event, callback);
  }, []);

  const off = useCallback((event: string, callback?: (...args: any[]) => void) => {
    if (!globalSocket) return;
    globalSocket.off(event, callback);
  }, []);

  const emit = useCallback((event: string, ...args: any[]) => {
    if (!globalSocket || !globalSocket.connected) return;
    globalSocket.emit(event, ...args);
  }, []);

  return { socket: globalSocket, isConnected, on, off, emit };
};
