'use client';

import React from 'react';
import { AlertProvider } from '@contexts/AlertContext';
import { AlertManager } from '@components/alerts/AlertManager';

export const RootLayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AlertProvider>
      <AlertManager />
      {children}
    </AlertProvider>
  );
};
