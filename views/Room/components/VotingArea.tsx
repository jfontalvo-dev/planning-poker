"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart3, Eye, Check, HelpCircle, RotateCcw } from "lucide-react";
import type { VotingAreaProps } from "../types";
import { useVotingArea } from "../hooks";
import { getRingPositions } from "../utils";

export const VotingArea: React.FC<VotingAreaProps> = ({
  room,
  currentUser,
  votes,
  onRevealVotes,
  onResetVotes,
  isAdmin,
  revealed,
}) => {
  const { stats } = useVotingArea({ votes });

  const positions = useMemo(
    () => getRingPositions(room.users.length),
    [room.users.length],
  );

  const canReveal = isAdmin && !revealed && votes.length > 0;

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col items-center justify-center px-2 py-4 md:py-0"
    >
      <div className="relative w-full h-full max-w-[500px] max-h-[500px] aspect-square mx-auto">
        {/* Users positioned in rings around the table */}
        {room.users.map((user, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const hasVoted = votes.some((v) => v.userId === user.id);
          const vote = votes.find((v) => v.userId === user.id);
          const isSelf = user.id === currentUser.id;

          return (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.04,
                type: "spring",
                stiffness: 300,
              }}
              className="absolute flex flex-col items-center z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: pos.left, top: pos.top }}
            >
              {/* Card */}
              <motion.div
                animate={revealed && vote ? { rotateY: [0, 90, 0] } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`w-10 h-14 md:w-11 md:h-[60px] rounded-lg flex items-center justify-center font-bold border-2 shadow-lg text-sm ${
                  user.isObserver
                    ? "bg-neutral-700/30 border-neutral-600/30 text-neutral-500"
                    : revealed && vote
                      ? "bg-primary-500/20 border-primary-500/50 text-primary-300"
                      : hasVoted
                        ? "bg-green-500/15 border-green-500/40 text-green-400"
                        : "bg-neutral-700/40 border-neutral-600/40 text-neutral-500"
                }`}
              >
                {user.isObserver ? (
                  <Eye size={14} />
                ) : revealed && vote ? (
                  <span className="text-base font-bold">{vote.value}</span>
                ) : hasVoted ? (
                  <Check size={14} />
                ) : (
                  <HelpCircle size={14} />
                )}
              </motion.div>
              {/* Name */}
              <span
                className={`text-[10px] md:text-xs mt-0.5 max-w-14 md:max-w-16 truncate text-center leading-tight ${
                  isSelf ? "text-primary-400 font-semibold" : "text-neutral-400"
                }`}
              >
                {user.name}
              </span>
            </motion.div>
          );
        })}

        {/* Round center table */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {canReveal ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRevealVotes}
              id="table"
              className="w-42 h-42 rounded-full bg-primary-500/10 border-2 border-primary-500/40 flex flex-col items-center justify-center cursor-pointer shadow-xl shadow-primary-500/10 hover:bg-primary-500/20 hover:border-primary-500/60 transition-all"
            >
              <BarChart3 size={22} className="text-primary-400 mb-1" />
              <p className="text-primary-300 text-xs font-semibold">
                Revelar Votos
              </p>
            </motion.button>
          ) : revealed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              id="table"
              className="w-42 h-42 rounded-full bg-neutral-800/95 border-2 border-neutral-600 flex flex-col items-center justify-center shadow-xl"
            >
              {stats ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-green-400 text-sm font-bold">
                        {stats.min}
                      </p>
                      <p className="text-neutral-500 text-[12px] uppercase">
                        Min
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-primary-400 text-xl font-bold">
                        {stats.average}
                      </p>
                      <p className="text-neutral-500 text-[12px] uppercase">
                        Promedio
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-red-400 text-sm font-bold">
                        {stats.max}
                      </p>
                      <p className="text-neutral-500 text-[12px] uppercase">
                        Max
                      </p>
                    </div>
                  </div>
                  {isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onResetVotes}
                      className="mt-1.5 px-3 py-1 rounded-lg bg-neutral-700/50 hover:bg-neutral-700 text-neutral-400 hover:text-primary-400 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw size={12} />
                      <span className="text-[10px] font-medium">Reiniciar</span>
                    </motion.button>
                  )}
                </>
              ) : (
                <p className="text-neutral-400 text-sm">Sin datos</p>
              )}
            </motion.div>
          ) : (
            <motion.div
              id="table"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-36 h-36 rounded-full bg-neutral-800/95 border-2 border-dashed border-neutral-600 flex items-center justify-center shadow-lg hover:border-neutral-500 transition-all"
            >
              <p className="text-neutral-400 text-sm font-medium text-center px-2">
                Esperando votos
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
