'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GuestHeader, GuestInfoBox, GuestForm } from './components';
import { useGuestForm } from './hooks';
import type { GuestProps } from './types';

export const Guest: React.FC<GuestProps> = ({ roomId, onJoin, isLoading }) => {
  const { userName, error, handleUserNameChange, handleSubmit } = useGuestForm({
    onJoin,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-neutral-900 via-primary-900 to-neutral-900"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-linear-to-br from-primary-500/20 to-secondary-500/20 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-br from-secondary-500/20 to-pink-500/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-linear-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-xl border-2 border-primary-500/30 rounded-2xl p-8 shadow-2xl shadow-primary-500/20">
          <GuestHeader />
          <GuestInfoBox roomId={roomId} />
          <GuestForm
            userName={userName}
            error={error}
            isLoading={isLoading}
            onUserNameChange={handleUserNameChange}
            onSubmit={handleSubmit}
          />

          <p className="text-center text-xs text-neutral-500 mt-6">
            ¿Primera vez? Crea tu propia sala en{' '}
            <span className="text-primary-400 font-medium">Planning Poker</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
