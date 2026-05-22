"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Clock } from "lucide-react";
import type { TimerPopupProps } from "../types";
import { TIMER_PRESET_SECONDS } from "../utils";
import { useTimerPopup } from "../hooks";

export const TimerPopup: React.FC<TimerPopupProps> = (props) => {
  const {
    formattedTime,
    progress,
    hasVotes,
    onStart,
    onPause,
    onResume,
    onReset,
  } = props;
  const {
    selectedSeconds,
    setSelectedSeconds,
    isIdle,
    isRunning,
    isPaused,
    isFinished,
  } = useTimerPopup(props);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-12 left-1/2 -translate-x-1/2 w-72 bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl shadow-2xl shadow-black/40 z-50 overflow-hidden"
    >
      {/* Time display */}
      <div className="px-5 pt-5 pb-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock size={16} className="text-neutral-400" />
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Temporizador
          </p>
        </div>
        <p
          className={`text-4xl font-mono font-bold tracking-widest ${
            isRunning
              ? "text-primary-300"
              : isFinished
                ? "text-emerald-400"
                : "text-white"
          }`}
        >
          {formattedTime}
        </p>

        {/* Progress bar */}
        {!isIdle && (
          <div className="mt-3 h-1 w-full bg-neutral-700/50 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                isFinished ? "bg-emerald-500" : "bg-primary-500"
              }`}
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      {!isIdle && (
        <div className="px-5 pb-4 flex items-center justify-center gap-3">
          {isRunning && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPause}
              className="w-10 h-10 rounded-xl bg-neutral-700/60 hover:bg-neutral-600/60 border border-neutral-600/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
            >
              <Pause size={16} />
            </motion.button>
          )}

          {isPaused && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onResume}
              className="w-10 h-10 rounded-xl bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 flex items-center justify-center text-primary-300 hover:text-primary-200 transition-all"
            >
              <Play size={16} />
            </motion.button>
          )}

          {isFinished && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-emerald-400 font-medium"
            >
              ¡Tiempo!
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onReset}
            className="w-10 h-10 rounded-xl bg-neutral-700/60 hover:bg-neutral-600/60 border border-neutral-600/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all"
          >
            <RotateCcw size={16} />
          </motion.button>
        </div>
      )}

      {/* Presets - only when idle */}
      {isIdle && (
        <div className="px-5 pb-4 space-y-3">
          <div className="grid grid-cols-5 gap-1.5">
            {TIMER_PRESET_SECONDS.map((sec) => (
              <motion.button
                key={sec}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setSelectedSeconds(sec)}
                className={`py-2 rounded-xl border text-sm font-medium transition-all ${
                  selectedSeconds === sec
                    ? "bg-primary-500/30 border-primary-500/60 text-primary-300"
                    : "bg-neutral-700/50 hover:bg-primary-500/20 border-neutral-600/40 hover:border-primary-500/40 text-neutral-300 hover:text-primary-300"
                }`}
              >
                {sec}s
              </motion.button>
            ))}
          </div>

          {/* Custom input */}
          <div className="flex gap-2">
            <input
              type="number"
              min={1}
              max={300}
              value={selectedSeconds || ""}
              onChange={(e) => setSelectedSeconds(Number(e.target.value))}
              placeholder="Seg"
              className="flex-1 px-3 py-1.5 rounded-xl bg-neutral-700/50 border border-neutral-600/40 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30"
            />
            <motion.button
              whileHover={selectedSeconds > 0 ? { scale: 1.05 } : {}}
              whileTap={selectedSeconds > 0 ? { scale: 0.95 } : {}}
              onClick={() =>
                selectedSeconds > 0 && hasVotes && onStart(selectedSeconds)
              }
              disabled={!selectedSeconds || selectedSeconds <= 0 || !hasVotes}
              className={`px-3 py-1.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-1 ${
                selectedSeconds > 0 && hasVotes
                  ? "bg-primary-500/20 hover:bg-primary-500/30 border-primary-500/40 text-primary-300 hover:text-primary-200"
                  : "bg-neutral-700/30 border-neutral-600/30 text-neutral-500 cursor-not-allowed"
              }`}
            >
              <Play size={12} />
              Iniciar
            </motion.button>
          </div>

          {!hasVotes && (
            <p className="text-xs text-neutral-500 text-center">
              Se requiere al menos un voto para iniciar
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};
