"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { TimerDisplayProps } from "../types";
import { TIMER_STATUS_STYLES } from "../utils";

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  formattedTime,
  status,
  isPopupOpen,
  onClick,
}) => {
  const styles = TIMER_STATUS_STYLES[status];
  const isRunning = status === "running";

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        relative flex items-center gap-2 px-3 py-1.5 rounded-2xl border cursor-pointer
        backdrop-blur-sm transition-all duration-200
        ${styles.bg} ${styles.border} ${styles.shadow}
        ${isPopupOpen ? "ring-2 ring-primary-500/40 border-primary-500/60 bg-primary-500/15" : ""}
        hover:bg-primary-500/10 hover:border-primary-500/30
      `}
    >
      {/* Clock icon */}
      <motion.div
        animate={isRunning ? { rotate: [0, 10, -10, 0] } : {}}
        transition={
          isRunning ? { repeat: Infinity, duration: 2, ease: "easeInOut" } : {}
        }
      >
        <Clock
          size={14}
          className={`${isPopupOpen ? "text-primary-400" : styles.icon} transition-colors`}
        />
      </motion.div>

      {/* Time display */}
      <span
        className={`text-sm font-mono font-semibold tracking-wider ${isPopupOpen ? "text-primary-300" : styles.text} transition-colors`}
      >
        {formattedTime}
      </span>

      {/* Running pulse indicator */}
      {isRunning && (
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 rounded-full bg-primary-400"
        />
      )}

      {/* Popup open indicator arrow */}
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 border-b border-r border-primary-500/60 rotate-45"
        />
      )}
    </motion.button>
  );
};
