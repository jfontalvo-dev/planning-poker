'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, AlertCircle } from 'lucide-react';
import { UserNameInput } from './UserNameInput';
import { itemVariants } from '../utils';
import type { JoinModeProps } from '../types';

export const JoinMode: React.FC<JoinModeProps> = ({
  userName,
  roomId,
  errors,
  isLoading,
  isUserStored,
  onUserNameChange,
  onRoomIdChange,
  onJoinRoom,
  onBack,
}) => (
  <motion.div variants={itemVariants} className="space-y-4">
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onBack}
      className="text-sm text-neutral-400 hover:text-neutral-200 mb-4 flex items-center gap-1 font-medium transition-colors hover:bg-white/5 px-3 py-2 rounded-lg"
    >
      ← Volver
    </motion.button>

    <UserNameInput
      value={userName}
      error={errors.userName}
      disabled={isUserStored}
      onChange={onUserNameChange}
    />

    <div className="space-y-2">
      <label className="text-sm font-semibold text-neutral-200 block">
        ID de la Sala
      </label>
      <motion.div
        animate={{ scale: errors.roomId ? 1.02 : 1 }}
        className={`relative w-full rounded-xl backdrop-blur-md border transition-all ${
          errors.roomId
            ? 'border-red-500/50 bg-red-500/5'
            : 'border-white/20 bg-white/10 focus-within:border-purple-400/50 focus-within:bg-purple-400/5'
        }`}
      >
        <input
          type="text"
          value={roomId}
          onChange={(e) => onRoomIdChange(e.target.value)}
          placeholder="ej. ABC123"
          maxLength={6}
          className="w-full px-4 py-3 rounded-xl bg-transparent text-white placeholder:text-white focus:outline-none text-sm font-mono tracking-widest font-semibold text-center"
        />
      </motion.div>
      {errors.roomId && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1 text-red-400 text-xs mt-1"
        >
          <AlertCircle size={14} />
          {errors.roomId}
        </motion.div>
      )}
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onJoinRoom}
      disabled={isLoading}
      className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center gap-2 mt-6"
    >
      {isLoading ? (
        <>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
            <Users size={18} />
          </motion.div>
          Uniéndose...
        </>
      ) : (
        <>
          <ArrowRight size={18} />
          Unirse a Sala
        </>
      )}
    </motion.button>
  </motion.div>
);
