"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useSocket } from "@hooks";
import type { TimerState, UseTimerReturn } from "../types";

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

export const useTimer = (
  roomId: string,
  onFinished?: () => void,
): UseTimerReturn => {
  const { on, off, emit } = useSocket();
  const [timer, setTimer] = useState<TimerState>({
    status: "idle",
    remaining: 0,
    duration: 0,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => {
    onFinishedRef.current = onFinished;
  }, [onFinished]);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev.remaining <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          onFinishedRef.current?.();
          return { ...prev, remaining: 0, status: "finished" };
        }
        return { ...prev, remaining: prev.remaining - 1 };
      });
    }, 1000);
  }, [clearTimer]);

  // Socket listeners
  useEffect(() => {
    const handleStarted = (data: { roomId: string; duration: number }) => {
      clearTimer();
      setTimer({
        status: "running",
        remaining: data.duration,
        duration: data.duration,
      });
      startInterval();
    };

    const handlePaused = () => {
      clearTimer();
      setTimer((prev) => ({ ...prev, status: "paused" }));
    };

    const handleResumed = () => {
      setTimer((prev) => ({ ...prev, status: "running" }));
      startInterval();
    };

    const handleReset = () => {
      clearTimer();
      setTimer({ status: "idle", remaining: 0, duration: 0 });
    };

    on("timer-started", handleStarted);
    on("timer-paused", handlePaused);
    on("timer-resumed", handleResumed);
    on("timer-reset", handleReset);

    return () => {
      off("timer-started", handleStarted);
      off("timer-paused", handlePaused);
      off("timer-resumed", handleResumed);
      off("timer-reset", handleReset);
      clearTimer();
    };
  }, [on, off, clearTimer, startInterval]);

  const start = useCallback(
    (seconds: number) => {
      emit("start-timer", { roomId, duration: seconds });
    },
    [emit, roomId],
  );

  const pause = useCallback(() => {
    emit("pause-timer", { roomId });
  }, [emit, roomId]);

  const resume = useCallback(() => {
    emit("resume-timer", { roomId });
  }, [emit, roomId]);

  const reset = useCallback(() => {
    emit("reset-timer", { roomId });
  }, [emit, roomId]);

  const progress =
    timer.duration > 0 ? (timer.remaining / timer.duration) * 100 : 0;

  return {
    timer,
    formattedTime: formatTime(timer.remaining),
    progress,
    start,
    pause,
    resume,
    reset,
  };
};
