"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSocket, useLocalStorage } from "@hooks";
import { useRoomStore } from "@store/roomStore";
import { Room, User, Vote, CardSet, LocalStorageData } from "@/types";
import { AlertContextType } from "@/types/alerts";

export const useRoom = (
  roomId: string,
  addAlert: AlertContextType["addAlert"],
) => {
  const router = useRouter();
  const { isConnected, on, off, emit } = useSocket();
  const {
    user: storedUser,
    saveUser,
    saveRoom,
    clearRoom,
    setObserver,
  } = useLocalStorage();
  const roomStore = useRoomStore();
  const [roomNotFound, setRoomNotFound] = useState(false);
  const storedUserRef = useRef<LocalStorageData | null>(storedUser);
  const saveUserRef = useRef(saveUser);
  const saveRoomRef = useRef(saveRoom);
  const clearRoomRef = useRef(clearRoom);
  const setObserverRef = useRef(setObserver);

  useEffect(() => {
    storedUserRef.current = storedUser;
  }, [storedUser]);

  useEffect(() => {
    saveUserRef.current = saveUser;
  }, [saveUser]);

  useEffect(() => {
    saveRoomRef.current = saveRoom;
  }, [saveRoom]);

  useEffect(() => {
    clearRoomRef.current = clearRoom;
  }, [clearRoom]);

  useEffect(() => {
    setObserverRef.current = setObserver;
  }, [setObserver]);

  useEffect(() => {
    if (!isConnected || !storedUser || !roomId) {
      console.log(
        "Esperando condiciones: isConnected=%s, storedUser=%s, roomId=%s",
        isConnected,
        !!storedUser,
        roomId,
      );
      return;
    }

    const initialUser = storedUser;
    console.log("📍 Uniendo a sala:", roomId);
    let cleanup: (() => void) | null = null;

    const handleRoomJoined = (room: Room) => {
      console.log("✅ Sala recibida:", room.id);
      roomStore.setRoom(room);
      saveRoomRef.current(room.id);
      const currentUser = room.users.find((u) => u.id === initialUser.userId);
      if (currentUser) {
        roomStore.setCurrentUser(currentUser);
      }
    };

    const handleUserJoined = (data: { room: Room; user: User }) => {
      console.log("👤 Usuario se unió:", data.user.name);
      roomStore.setRoom(data.room);
    };

    const handleVoteSubmitted = (data: { roomId: string; vote: Vote }) => {
      console.log("🗳️  Voto recibido");
      roomStore.addVote(data.vote);
    };

    const handleVotesRevealed = (data: {
      roomId: string;
      votes: Vote[];
      room: Room;
    }) => {
      console.log("📊 Votos revelados");
      roomStore.setRoom(data.room);
    };

    const handleVotesReset = (data: { roomId: string; room: Room }) => {
      console.log("🔄 Votos reiniciados");
      roomStore.setRoom(data.room);
    };

    const handleCardsUpdated = (data: {
      roomId: string;
      cardSet: CardSet;
      room: Room;
    }) => {
      console.log("🃏 Cartas actualizadas");
      roomStore.setRoom(data.room);
    };

    const handleObserverToggled = (data: {
      roomId: string;
      userId: string;
      isObserver: boolean;
      room: Room;
    }) => {
      console.log("👁️ Observador cambiado");
      roomStore.setRoom(data.room);
      const user = data.room.users.find((u) => u.id === initialUser.userId);
      if (user) {
        roomStore.setCurrentUser(user);
      }
      if (data.userId === initialUser.userId) {
        setObserverRef.current(data.isObserver);
      }
    };

    const handleUserLeft = (data: {
      roomId: string;
      userId: string;
      room: Room;
    }) => {
      console.log("👋 Usuario salió:", data.userId);
      if (data.userId === initialUser.userId) {
        clearRoomRef.current();
        router.push("/");
      } else {
        roomStore.setRoom(data.room);
        const user = data.room.users.find((u) => u.id === initialUser.userId);
        if (user) {
          roomStore.setCurrentUser(user);
        }
      }
    };

    const handleError = (data: { message: string; type?: string }) => {
      console.error("❌ Error:", data.message);
      if (data.message === "Room not found") {
        clearRoomRef.current();
        setRoomNotFound(true);
        return;
      }
      addAlert({
        type: "error",
        title: "Error",
        message: data.message,
        duration: "medium",
      });
    };

    const handleRoomClosed = (data: {
      roomId: string;
      adminId: string;
      message: string;
    }) => {
      console.log("🔥 Sala cerrada:", data.message);
      clearRoomRef.current();
      addAlert({
        type: "warning",
        title: "Sala cerrada",
        message: data.message,
        duration: "long",
      });
      router.push("/");
    };

    on("room-joined", handleRoomJoined);
    on("user-joined", handleUserJoined);
    on("vote-submitted", handleVoteSubmitted);
    on("votes-revealed", handleVotesRevealed);
    on("votes-reset", handleVotesReset);
    on("cards-updated", handleCardsUpdated);
    on("observer-toggled", handleObserverToggled);
    on("user-left", handleUserLeft);
    const handleNameUpdated = (data: {
      roomId: string;
      userId: string;
      newName: string;
      room: Room;
    }) => {
      console.log("✏️  Nombre actualizado:", data.userId, "→", data.newName);
      roomStore.setRoom(data.room);
      const user = data.room.users.find((u) => u.id === initialUser.userId);
      if (user) {
        roomStore.setCurrentUser(user);
      }
      if (data.userId === initialUser.userId) {
        saveUserRef.current({
          userId: initialUser.userId,
          userName: data.newName,
          isObserver: storedUserRef.current?.isObserver ?? false,
        });
      }
    };

    on("room-closed", handleRoomClosed);
    on("name-updated", handleNameUpdated);
    on("error", handleError);

    emit("join-room", {
      roomId,
      userId: initialUser.userId,
      userName: initialUser.userName,
      isObserver: initialUser.isObserver ?? false,
    });

    cleanup = () => {
      off("room-joined", handleRoomJoined);
      off("user-joined", handleUserJoined);
      off("vote-submitted", handleVoteSubmitted);
      off("votes-revealed", handleVotesRevealed);
      off("votes-reset", handleVotesReset);
      off("cards-updated", handleCardsUpdated);
      off("observer-toggled", handleObserverToggled);
      off("user-left", handleUserLeft);
      off("room-closed", handleRoomClosed);
      off("name-updated", handleNameUpdated);
      off("error", handleError);
    };

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, !!storedUser, roomId, emit, on, off, router, addAlert]);

  const handleVote = useCallback(
    (value: number) => {
      if (!storedUserRef.current || !roomStore.room) return;
      emit("vote", {
        roomId: roomStore.room.id,
        userId: storedUserRef.current.userId,
        value,
      });
    },
    [roomStore.room, emit],
  );

  const handleRevealVotes = useCallback(() => {
    if (!roomStore.room) return;
    emit("reveal-votes", {
      roomId: roomStore.room.id,
      adminId: roomStore.room.adminId,
    });
  }, [roomStore.room, emit]);

  const handleResetVotes = useCallback(() => {
    if (!roomStore.room) return;
    emit("reset-votes", {
      roomId: roomStore.room.id,
      adminId: roomStore.room.adminId,
    });
  }, [roomStore.room, emit]);

  const handleUpdateCardSet = useCallback(
    (cardSet: CardSet) => {
      if (!roomStore.room) return;
      emit("update-cards", {
        roomId: roomStore.room.id,
        adminId: roomStore.room.adminId,
        cardSet,
      });
    },
    [roomStore.room, emit],
  );

  const handleToggleObserver = useCallback(() => {
    if (!storedUserRef.current || !roomStore.room) return;
    const newIsObserver = !roomStore.currentUser?.isObserver;
    emit("toggle-observer", {
      roomId: roomStore.room.id,
      userId: storedUserRef.current.userId,
      isObserver: newIsObserver,
    });
  }, [roomStore.room, roomStore.currentUser, emit]);

  const handleUpdateUserName = useCallback(
    (newName: string) => {
      if (!storedUserRef.current || !roomStore.room || !roomStore.currentUser)
        return;
      emit("update-name", {
        roomId: roomStore.room.id,
        userId: storedUserRef.current.userId,
        newName,
      });
    },
    [roomStore.room, roomStore.currentUser, emit],
  );

  const handleLeaveRoom = useCallback(() => {
    if (storedUserRef.current && roomStore.room) {
      emit("leave-room", {
        roomId: roomStore.room.id,
        userId: storedUserRef.current.userId,
      });
      clearRoomRef.current();
      router.push("/");
    }
  }, [roomStore.room, emit, router]);

  const handleCloseRoom = useCallback(() => {
    if (storedUserRef.current && roomStore.room) {
      emit("close-room", {
        roomId: roomStore.room.id,
        adminId: storedUserRef.current.userId,
      });
    }
  }, [roomStore.room, emit]);

  return {
    room: roomStore.room,
    currentUser: roomStore.currentUser,
    isReady:
      !!roomStore.room && !!roomStore.currentUser && !!storedUserRef.current,
    roomNotFound,
    handleVote,
    handleRevealVotes,
    handleResetVotes,
    handleUpdateCardSet,
    handleToggleObserver,
    handleUpdateUserName,
    handleLeaveRoom,
    handleCloseRoom,
  };
};
