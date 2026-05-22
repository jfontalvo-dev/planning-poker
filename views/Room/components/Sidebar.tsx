"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Shield, Eye, Check, Clock } from "lucide-react";
import type { SidebarProps } from "../types";
import {
  sidebarContainerVariants,
  sidebarItemVariants,
  ROLE_CONFIG,
} from "../utils";
import { useSidebar } from "../hooks";

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { users, votes, revealed, currentUserId } = props;
  const { getUserVote, voterCount } = useSidebar(props);

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full md:w-80 bg-linear-to-b px-4  flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="py-3">
        <h2 className="text-sm font-bold text-white mb-1">
          Usuarios Conectados
        </h2>
        <p className="text-xs text-neutral-400">
          {users.length} {users.length === 1 ? "usuario" : "usuarios"}
        </p>
      </div>

      {/* Lista de usuarios */}
      <motion.div
        variants={sidebarContainerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 overflow-y-auto px-1 py-2 space-y-1"
      >
        {users.map((user) => {
          const userVote = getUserVote(user.id);
          const roleKey = user.role as keyof typeof ROLE_CONFIG;
          const roleInfo = ROLE_CONFIG[roleKey];
          const RoleIcon = roleKey === "admin" ? Shield : User;
          const isCurrentUser = user.id === currentUserId;
          const hasVoted = userVote !== undefined;

          return (
            <motion.div
              key={user.id}
              variants={sidebarItemVariants}
              whileHover={{ scale: 1.02 }}
              className={`p-2 rounded-lg border-2 transition-all cursor-default ${
                isCurrentUser
                  ? "bg-linear-to-r from-primary-500/20 to-primary-600/10 border-primary-500/50 shadow-lg shadow-primary-500/20"
                  : "bg-neutral-800/50 border-neutral-700/30 hover:bg-neutral-700/50 hover:border-neutral-600/50"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={isCurrentUser ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 rounded-full bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 flex items-center justify-center text-white text-sm font-bold shrink-0 ring-2 ring-primary-400/50"
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate flex items-center gap-2">
                        {user.name}
                        {isCurrentUser && (
                          <span className="text-xs font-normal text-primary-400 bg-primary-400/10 px-2 py-1 rounded shrink-0">
                            Tú
                          </span>
                        )}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <RoleIcon size={12} className={roleInfo.color} />
                        <span className="text-xs text-neutral-400">
                          {roleInfo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicador de voto mejorado */}
                {!user.isObserver && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold ring-2 transition-all ${
                      hasVoted
                        ? "bg-green-500/20 text-green-400 border border-green-500/50 ring-green-500/30"
                        : "bg-neutral-700/50 text-neutral-500 border border-neutral-600/50 ring-neutral-600/30"
                    }`}
                  >
                    {hasVoted ? (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Check size={14} />
                      </motion.div>
                    ) : (
                      <Clock size={14} />
                    )}
                  </motion.div>
                )}

                {/* Indicador de observador */}
                {user.isObserver && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-yellow-500/10 ring-2 ring-yellow-500/30"
                  >
                    <Eye size={14} className="text-yellow-400" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer - Estado */}
      <div className="px-4 py-4 ">
        <div className="text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-neutral-400">Votación:</span>
            <span
              className={`font-semibold ${
                revealed ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {revealed ? "Revelado" : "Esperando"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-400">Votos:</span>
            <span className="font-semibold text-primary-400">
              {votes.length}/{voterCount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
