"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Settings, LogOut, Edit3, Check, X, XCircle } from "lucide-react";
import type { UserPopupProps } from "../types";
import { useUserPopup } from "../hooks";

export const UserPopup: React.FC<UserPopupProps> = ({
  userName,
  roomId,
  isObserver,
  isAdmin,
  onToggleObserver,
  onSaveName,
  onOpenCardSetModal,
  onCloseRoom,
  onLogout,
}) => {
  const {
    isEditing,
    newName,
    setNewName,
    handleSave,
    handleCancel,
    startEditing,
  } = useUserPopup({ userName, onSaveName });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-12 w-64 bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-xl shadow-2xl shadow-black/40 z-50 overflow-hidden"
    >
      {/* User info / name edit */}
      <div className="px-4 py-3 border-b border-neutral-700/50">
        {isEditing ? (
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") handleCancel();
              }}
              autoFocus
              maxLength={20}
              className="flex-1 px-2 py-1 rounded-lg bg-neutral-700/50 border border-neutral-600/50 text-sm text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSave}
              className="p-1 rounded-md hover:bg-green-500/20 cursor-pointer text-green-400 transition-all"
            >
              <Check size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCancel}
              className="p-1 rounded-md hover:bg-red-500/20 cursor-pointer text-red-400 transition-all"
            >
              <X size={14} />
            </motion.button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white truncate">
                {userName}
              </p>
              <p className="text-xs text-neutral-400">Sala: {roomId}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => startEditing()}
              className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-400 hover:text-neutral-300 transition-all"
            >
              <Edit3 size={13} />
            </motion.button>
          </div>
        )}
      </div>

      {/* Observer toggle */}
      <div className="px-4 py-3 border-b border-neutral-700/50">
        <button
          onClick={onToggleObserver}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-yellow-400" />
            <span className="text-sm text-neutral-300">Observador</span>
          </div>
          <div
            className={`relative w-9 h-5 rounded-full cursor-pointer transition-colors ${
              isObserver ? "bg-primary-500" : "bg-neutral-600"
            }`}
          >
            <motion.div
              animate={{ x: isObserver ? 16 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow"
            />
          </div>
        </button>
      </div>

      {/* Actions */}
      <div className="px-2 py-2">
        {isAdmin && (
          <motion.button
            whileHover={{ x: 2 }}
            onClick={onOpenCardSetModal}
            className="w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-all"
          >
            <Settings size={14} />
            Configuración de cartas
          </motion.button>
        )}
        {isAdmin && (
          <motion.button
            whileHover={{ x: 2 }}
            onClick={onCloseRoom}
            className="w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
          >
            <XCircle size={14} />
            Cerrar sala
          </motion.button>
        )}
        <motion.button
          whileHover={{ x: 2 }}
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
        >
          <LogOut size={14} />
          Salir de la sala
        </motion.button>
      </div>
    </motion.div>
  );
};
