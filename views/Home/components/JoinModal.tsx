'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { JoinMode } from './JoinMode';
import type { FormErrors } from '../types';

interface JoinModalProps {
  userName: string;
  roomId: string;
  errors: FormErrors;
  isLoading: boolean;
  isUserStored: boolean;
  onUserNameChange: (value: string) => void;
  onRoomIdChange: (value: string) => void;
  onJoinRoom: (e: React.FormEvent) => void;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  userName,
  roomId,
  errors,
  isLoading,
  isUserStored,
  onUserNameChange,
  onRoomIdChange,
  onJoinRoom,
  onClose,
}) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="relative bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-6 shadow-2xl max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <JoinMode
          userName={userName}
          roomId={roomId}
          errors={errors}
          isLoading={isLoading}
          isUserStored={isUserStored}
          onUserNameChange={onUserNameChange}
          onRoomIdChange={onRoomIdChange}
          onJoinRoom={onJoinRoom}
          onBack={onClose}
        />
      </div>
    </motion.div>
  </>
);
