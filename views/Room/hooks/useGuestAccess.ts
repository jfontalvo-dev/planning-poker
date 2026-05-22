"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSocket, useLocalStorage } from "@hooks";
import { Room } from "@/types";
import { generateId } from "@utils";
import { AlertContextType } from "@/types/alerts";

export const useGuestAccess = (
  roomId: string,
  addAlert: AlertContextType["addAlert"],
) => {
  const { isConnected, on, off, emit } = useSocket();
  const { user: storedUser, saveUser, saveRoom } = useLocalStorage();
  const [showGuestPrompt, setShowGuestPrompt] = useState(false);
  const [isJoiningAsGuest, setIsJoiningAsGuest] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (isConnected && !storedUser && isMountedRef.current) {
      setShowGuestPrompt(true);
    }
  }, [isConnected, storedUser]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleGuestJoin = useCallback(
    async (userName: string) => {
      if (!isConnected) {
        addAlert({
          type: "error",
          title: "Sin conexión",
          message: "No hay conexión al servidor. Intenta nuevamente.",
          duration: "medium",
        });
        return;
      }

      setIsJoiningAsGuest(true);
      try {
        const userId = generateId();
        saveUser({ userId, userName, isObserver: false });

        let handled = false;
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleRoomJoined = (room: Room) => {
          console.log("✅ Guest joined room:", room.id);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          saveRoom(room.id);
          setIsJoiningAsGuest(false);
          setShowGuestPrompt(false);
          off("room-joined", handleRoomJoined);
          off("error", handleError);
        };

        const handleError = (data: { message: string }) => {
          console.error("❌ Guest join error:", data.message);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          setIsJoiningAsGuest(false);
          addAlert({
            type: "error",
            title: "Error al unirse",
            message: data.message,
            duration: "medium",
          });
        };

        on("room-joined", handleRoomJoined);
        on("error", handleError);

        await new Promise((resolve) => setTimeout(resolve, 100));

        emit("join-room", { roomId, userId, userName });

        timeoutId = setTimeout(() => {
          console.warn("⏱️ Guest join timeout");
          if (handled) return;
          handled = true;
          setIsJoiningAsGuest(false);
          off("room-joined", handleRoomJoined);
          off("error", handleError);
          addAlert({
            type: "warning",
            title: "Timeout",
            message: "Timeout al unirse a la sala. Intenta nuevamente.",
            duration: "medium",
          });
        }, 5000);
      } catch (error) {
        setIsJoiningAsGuest(false);
        console.error("Error in guest join:", error);
        addAlert({
          type: "error",
          title: "Error",
          message: "Error al unirse a la sala",
          duration: "medium",
        });
      }
    },
    [isConnected, roomId, emit, on, off, saveUser, saveRoom],
  );

  return {
    showGuestPrompt,
    isJoiningAsGuest,
    handleGuestJoin,
  };
};
