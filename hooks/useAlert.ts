'use client';

import { useContext } from 'react';
import { AlertContext } from '@contexts/AlertContext';
import { AlertContextType } from '@/types/alerts';

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }
  return context;
};
