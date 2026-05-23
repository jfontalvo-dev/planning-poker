'use client';

import type { Alert, AlertContextType, AlertDuration } from '@/types/alerts';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const ALERT_DURATION_MS: Record<
  Exclude<AlertDuration, 'persistent'>,
  number
> = {
  short: 3000,
  medium: 5000,
  long: 8000,
};

const createAlertId = (): string => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `alert-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined,
);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const timeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const clearTimer = useCallback((id: string) => {
    const timer = timeoutsRef.current.get(id);

    if (timer) {
      clearTimeout(timer);
      timeoutsRef.current.delete(id);
    }
  }, []);

  const removeAlert = useCallback(
    (id: string) => {
      clearTimer(id);
      setAlerts((currentAlerts) =>
        currentAlerts.filter((alert) => alert.id !== id),
      );
    },
    [clearTimer],
  );

  const clearAlerts = useCallback(() => {
    timeoutsRef.current.forEach((timer) => clearTimeout(timer));
    timeoutsRef.current.clear();
    setAlerts([]);
  }, []);

  const addAlert = useCallback<AlertContextType['addAlert']>((alert) => {
    const id = createAlertId();
    const timestamp = Date.now();
    const nextAlert: Alert = { ...alert, id, timestamp };

    setAlerts((currentAlerts) => [...currentAlerts, nextAlert]);

    if (alert.duration !== 'persistent') {
      const timeoutId = setTimeout(() => {
        setAlerts((currentAlerts) =>
          currentAlerts.filter((currentAlert) => currentAlert.id !== id),
        );
        timeoutsRef.current.delete(id);
      }, ALERT_DURATION_MS[alert.duration]);

      timeoutsRef.current.set(id, timeoutId);
    }

    return id;
  }, []);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timer) => clearTimeout(timer));
      timeoutsRef.current.clear();
    };
  }, []);

  const value = useMemo(
    () => ({
      alerts,
      addAlert,
      removeAlert,
      clearAlerts,
    }),
    [alerts, addAlert, removeAlert, clearAlerts],
  );

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};
