'use client';

import React, { createContext, useState, useCallback } from 'react';
import { Alert, AlertContextType } from '@/types/alerts';

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = useCallback((alert: Omit<Alert, 'id' | 'timestamp'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newAlert: Alert = {
      ...alert,
      id,
      timestamp: Date.now(),
    };

    setAlerts((prev) => [...prev, newAlert]);

    // Auto-remove based on duration
    if (alert.duration !== 'persistent') {
      const durations = {
        short: 3000,
        medium: 5000,
        long: 8000,
      };

      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
      }, durations[alert.duration] || 5000);
    }

    return id;
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, clearAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};
