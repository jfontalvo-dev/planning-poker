'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users } from 'lucide-react';
import { UserNameInput } from './UserNameInput';
import { itemVariants, FEATURES } from '../utils';
import type { HomeModeProps } from '../types';

export const HomeMode: React.FC<HomeModeProps> = ({
  userName,
  errors,
  isLoading,
  isUserStored,
  onUserNameChange,
  onCreateRoom,
  onSwitchToJoin,
}) => (
  <motion.div variants={itemVariants} className="space-y-4">
    <UserNameInput
      value={userName}
      error={errors.userName}
      disabled={isUserStored}
      onChange={onUserNameChange}
    />

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onCreateRoom}
      disabled={isLoading}
      className="btn disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center gap-1 bg-white text-primary-600 hover:bg-secondary-100 border-none font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      {isLoading ? (
        <>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
            <Zap size={14} />
          </motion.div>
          Creando...
        </>
      ) : (
        <>
          <Zap size={18} />
          Crear Nueva Sala
        </>
      )}
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSwitchToJoin}
      disabled={isLoading}
      className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center gap-1"
    >
      <Users size={18} />
      Unirse a una Sala
    </motion.button>

    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
      {FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="p-2 rounded-xl glass text-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
        >
          <feature.icon size={16} className="mx-auto mb-1 text-blue-400" />
          <p className="text-xs text-neutral-300 font-medium">{feature.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
