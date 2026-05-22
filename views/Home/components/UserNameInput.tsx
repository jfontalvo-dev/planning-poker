"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { UserNameInputProps } from "../types";

export const UserNameInput: React.FC<UserNameInputProps> = ({
  value,
  error,
  disabled,
  onChange,
}) => (
  <div className="space-y-1 mb-3">
    <label className="text-sm font-semibold text-neutral-200 block">
      Tu nombre
    </label>
    <motion.div
      animate={{ scale: error ? 1.02 : 1 }}
      className={`relative w-full rounded-xl backdrop-blur-md border transition-all ${
        error
          ? "border-red-500/50 bg-red-500/5"
          : disabled
            ? "border-white/10 bg-white/5"
            : "border-white/20 bg-white/10 focus-within:border-blue-400/50 focus-within:bg-blue-400/5"
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ingresa tu nombre"
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-xl bg-transparent text-white placeholder:text-white focus:outline-none text-sm font-medium ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      />
    </motion.div>
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1 text-red-400 text-xs mt-1"
      >
        <AlertCircle size={14} />
        {error}
      </motion.div>
    )}
  </div>
);
