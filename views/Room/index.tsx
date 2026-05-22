"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { Header, Sidebar, VotingArea, CardSelector } from "./components";
import { Guest } from "@views/Guest";
import { useRoom, useGuestAccess } from "./hooks";
import { useAlert } from "@hooks";
import type { RoomProps } from "./types";

export const Room: React.FC<RoomProps> = ({ roomId }) => {
  const router = useRouter();
  const { addAlert } = useAlert();

  const {
    room,
    currentUser,
    isReady,
    roomNotFound,
    handleVote,
    handleRevealVotes,
    handleResetVotes,
    handleUpdateCardSet,
    handleToggleObserver,
    handleUpdateUserName,
    handleLeaveRoom,
    handleCloseRoom,
  } = useRoom(roomId, addAlert);

  const { showGuestPrompt, isJoiningAsGuest, handleGuestJoin } = useGuestAccess(
    roomId,
    addAlert,
  );

  if (roomNotFound) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen bg-neutral-900"
      >
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <XCircle size={32} className="text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Sala no disponible
          </h2>
          <p className="text-neutral-400 text-sm mb-6">
            La sala que intentas acceder no existe o fue cerrada por el
            administrador.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="px-6 py-2.5 rounded-xl bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 text-primary-300 hover:text-primary-200 text-sm font-medium transition-all"
          >
            Volver al inicio
          </motion.button>
        </div>
      </motion.div>
    );
  }

  if (showGuestPrompt) {
    return (
      <Guest
        roomId={roomId}
        onJoin={handleGuestJoin}
        isLoading={isJoiningAsGuest}
      />
    );
  }

  if (!isReady) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen bg-neutral-900"
      >
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin mx-auto mb-4" />
          <p className="text-neutral-400">Conectando a la sala...</p>
        </div>
      </motion.div>
    );
  }

  const isAdmin = currentUser?.role === "admin";

  return (
    <div className="flex flex-col h-screen font-poppins overflow-hidden bg-linear-to-br from-neutral-900 via-primary-900 to-neutral-90">
      <Header
        roomId={room!.id}
        userName={currentUser!.name}
        isObserver={currentUser!.isObserver}
        isAdmin={isAdmin}
        cardSet={room!.cardSet}
        onToggleObserver={handleToggleObserver}
        onUpdateUserName={handleUpdateUserName}
        onUpdateCardSet={handleUpdateCardSet}
        onRevealVotes={handleRevealVotes}
        hasVotes={room!.votes.length > 0}
        onCloseRoom={handleCloseRoom}
        onLogout={handleLeaveRoom}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex md:flex-col">
          <Sidebar
            users={room!.users}
            votes={room!.votes}
            revealed={room!.revealed}
            currentUserId={currentUser!.id}
          />
        </div>
        <div
          className="flex-1 flex flex-col w-full"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <VotingArea
            room={room!}
            currentUser={currentUser!}
            votes={room!.votes}
            onRevealVotes={handleRevealVotes}
            onResetVotes={handleResetVotes}
            isAdmin={isAdmin}
            revealed={room!.revealed}
          />

          <CardSelector
            cardSet={room!.cardSet}
            onVote={handleVote}
            currentUserVote={room!.votes.find(
              (v) => v.userId === currentUser?.id,
            )}
            isObserver={currentUser?.isObserver ?? false}
            revealed={room!.revealed}
          />
        </div>
      </div>
    </div>
  );
};
