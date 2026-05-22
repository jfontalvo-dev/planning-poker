"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";
import type { GuestFormProps } from "../types";

export const GuestForm: React.FC<GuestFormProps> = ({
  userName,
  error,
  isLoading,
  onUserNameChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white-300">
        Tu nombre
      </label>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          value={userName}
          onChange={(e) => onUserNameChange(e.target.value)}
          placeholder="Ingresa tu nombre"
          autoFocus
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/20 focus:border-primary-400/50 text-white placeholder:text-white focus:outline-none transition-all focus:ring-2 focus:ring-primary-400/30 disabled:opacity-50"
        />
      </motion.div>

      {error.userName && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-xs"
        >
          <AlertCircle size={14} />
          {error.userName}
        </motion.div>
      )}
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || !userName.trim()}
      className="btn disabled:opacity-50 py-3 disabled:cursor-not-allowed w-full flex items-center justify-center gap-1 bg-white text-primary-600 hover:bg-secondary-100 border-none font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-4 h-4 border-2 border-transparent border-t-white rounded-full"
          />
          Conectando...
        </>
      ) : (
        <>
          Unirse a la Sala
          <ArrowRight size={18} />
        </>
      )}
    </motion.button>
  </form>
);
