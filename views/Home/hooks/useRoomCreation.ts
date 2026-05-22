"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSocket, useLocalStorage } from "@hooks";
import { generateId } from "@utils";
import { AlertContextType } from "@/types/alerts";
import type { RoomResponse } from "../types";

export const useRoomCreation = (addAlert: AlertContextType["addAlert"]) => {
  const router = useRouter();
  const { user: storedUser, saveUser } = useLocalStorage();
  const { isConnected, on, off, emit } = useSocket();
  const [isLoading, setIsLoading] = useState(false);
  const storedUserRef = useRef(storedUser);

  useEffect(() => {
    storedUserRef.current = storedUser;
  }, [storedUser]);

  const handleCreateRoom = useCallback(
    async (userName: string) => {
      console.log("[handleCreateRoom] Iniciando, isConnected:", isConnected);

      if (!isConnected) {
        addAlert({
          type: "error",
          title: "Sin conexión",
          message: "No hay conexión al servidor. Intenta nuevamente.",
          duration: "medium",
        });
        return;
      }

      setIsLoading(true);
      try {
        const userId = storedUserRef.current?.userId ?? generateId();
        saveUser({ userId, userName, isObserver: false });

        let handled = false;
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleRoomCreated = (room: RoomResponse) => {
          console.log("✅ [handleCreateRoom] room-created recibido:", room.id);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          setIsLoading(false);
          off("room-created", handleRoomCreated);
          off("error", handleError);
          router.push(`/room/${room.id}`);
        };

        const handleError = (data: { message: string }) => {
          console.error("❌ [handleCreateRoom] Error recibido:", data.message);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          setIsLoading(false);
          off("room-created", handleRoomCreated);
          off("error", handleError);
          addAlert({
            type: "error",
            title: "Error al crear sala",
            message: data.message,
            duration: "medium",
          });
        };

        console.log("📡 [handleCreateRoom] Registrando listeners");
        on("room-created", handleRoomCreated);
        on("error", handleError);

        await new Promise((resolve) => setTimeout(resolve, 100));

        console.log("📤 [handleCreateRoom] Emitiendo create-room");
        emit("create-room", { userId, userName });

        timeoutId = setTimeout(() => {
          console.warn("⏱️ [handleCreateRoom] Timeout");
          if (handled) return;
          handled = true;
          setIsLoading(false);
          off("room-created", handleRoomCreated);
          off("error", handleError);
          addAlert({
            type: "warning",
            title: "Timeout",
            message: "Timeout al crear la sala. Intenta nuevamente.",
            duration: "medium",
          });
        }, 5000);
      } catch (error) {
        setIsLoading(false);
        console.error("Error creating room:", error);
        addAlert({
          type: "error",
          title: "Error",
          message: "Error al crear la sala",
          duration: "medium",
        });
      }
    },
    [isConnected, saveUser, on, off, emit, router, addAlert],
  );

  const handleJoinRoom = useCallback(
    async (roomId: string, userName: string) => {
      console.log(
        "[handleJoinRoom] Iniciando, roomId:",
        roomId,
        "isConnected:",
        isConnected,
      );

      if (!isConnected) {
        addAlert({
          type: "error",
          title: "Sin conexión",
          message: "No hay conexión al servidor. Intenta nuevamente.",
          duration: "medium",
        });
        return;
      }

      setIsLoading(true);
      try {
        const userId = storedUserRef.current?.userId ?? generateId();
        saveUser({ userId, userName, isObserver: false });

        let handled = false;
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleRoomJoined = (room: RoomResponse) => {
          console.log("✅ [handleJoinRoom] room-joined recibido:", room.id);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          setIsLoading(false);
          off("room-joined", handleRoomJoined);
          off("error", handleError);
          router.push(`/room/${room.id}`);
        };

        const handleError = (data: { message: string }) => {
          console.error("❌ [handleJoinRoom] Error recibido:", data.message);
          if (handled) return;
          handled = true;
          if (timeoutId) clearTimeout(timeoutId);
          setIsLoading(false);
          off("room-joined", handleRoomJoined);
          off("error", handleError);
          addAlert({
            type: "error",
            title: "Error al unirse",
            message: data.message,
            duration: "medium",
          });
        };

        console.log("📡 [handleJoinRoom] Registrando listeners");
        on("room-joined", handleRoomJoined);
        on("error", handleError);

        await new Promise((resolve) => setTimeout(resolve, 100));

        console.log("📤 [handleJoinRoom] Emitiendo join-room");
        emit("join-room", { roomId, userId, userName });

        timeoutId = setTimeout(() => {
          console.warn("⏱️ [handleJoinRoom] Timeout");
          if (handled) return;
          handled = true;
          setIsLoading(false);
          off("room-joined", handleRoomJoined);
          off("error", handleError);
          addAlert({
            type: "warning",
            title: "Timeout",
            message:
              "Timeout al unirse a la sala. Verifica el ID e intenta nuevamente.",
            duration: "medium",
          });
        }, 5000);
      } catch (error) {
        setIsLoading(false);
        console.error("Error joining room:", error);
        addAlert({
          type: "error",
          title: "Error",
          message: "Error al unirse a la sala",
          duration: "medium",
        });
      }
    },
    [isConnected, saveUser, on, off, emit, router, addAlert],
  );

  return {
    isLoading,
    handleCreateRoom,
    handleJoinRoom,
  };
};
