"use client";

import { useState } from "react";
import type { TimerPopupProps } from "../types";

export const useTimerPopup = ({ timer }: TimerPopupProps) => {
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  const isIdle = timer.status === "idle";
  const isRunning = timer.status === "running";
  const isPaused = timer.status === "paused";
  const isFinished = timer.status === "finished";

  return {
    selectedSeconds,
    setSelectedSeconds,
    isIdle,
    isRunning,
    isPaused,
    isFinished,
  };
};
