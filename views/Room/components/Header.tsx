"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2 } from "lucide-react";
import type { HeaderProps } from "../types";
import { useHeader } from "../hooks";
import { useTimer } from "../hooks";
import { UserPopup } from "./UserPopup";
import { TimerDisplay } from "./TimerDisplay";
import { TimerPopup } from "./TimerPopup";
import { CardSetModal } from "./CardSetModal";

export const Header: React.FC<HeaderProps> = ({
  roomId,
  userName,
  isObserver,
  isAdmin,
  cardSet,
  onToggleObserver,
  onUpdateUserName,
  onUpdateCardSet,
  onRevealVotes,
  hasVotes,
  onCloseRoom,
  onLogout,
}) => {
  const {
    today,
    isPopupOpen,
    popupRef,
    togglePopup,
    handleShareRoom,
    handleToggleObserver,
  } = useHeader({ roomId, onToggleObserver });

  const { timer, formattedTime, progress, start, pause, resume, reset } =
    useTimer(roomId, onRevealVotes);

  const [isTimerPopupOpen, setIsTimerPopupOpen] = useState(false);
  const [isCardSetModalOpen, setIsCardSetModalOpen] = useState(false);
  const timerPopupRef = useRef<HTMLDivElement>(null);

  const toggleTimerPopup = useCallback(() => {
    setIsTimerPopupOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        timerPopupRef.current &&
        !timerPopupRef.current.contains(e.target as Node)
      ) {
        setIsTimerPopupOpen(false);
      }
    };
    if (isTimerPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTimerPopupOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="py-3 px-4 flex items-center justify-between"
      >
        {/* Izquierda: Logo y título */}
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-8 h-8 bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">PP</span>
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-white">Planning Poker</h1>
            <p className="text-xs text-neutral-400">{today}</p>
          </div>
        </div>

        {/* Derecha: Acciones + Avatar */}
        <div className="flex items-center gap-2">
          <div className="relative" ref={timerPopupRef}>
            <TimerDisplay
              formattedTime={formattedTime}
              status={timer.status}
              progress={progress}
              isPopupOpen={isTimerPopupOpen}
              onClick={toggleTimerPopup}
            />

            <AnimatePresence>
              {isTimerPopupOpen && (
                <TimerPopup
                  timer={timer}
                  formattedTime={formattedTime}
                  progress={progress}
                  hasVotes={hasVotes}
                  onStart={start}
                  onPause={pause}
                  onResume={resume}
                  onReset={reset}
                />
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShareRoom}
            className="btn btn-ghost cursor-pointer focus:outline-none flex items-center gap-2"
          >
            <Share2 size={14} />
            <span className="hidden sm:inline">Compartir</span>
          </motion.button>

          <div
            className="relative flex items-center gap-2 ml-2 pl-2 border-l border-neutral-700/50"
            ref={popupRef}
          >
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-white">{userName}</p>
              <p className="text-xxs text-neutral-400">ID: {roomId}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePopup}
              className="w-8 h-8 rounded-full bg-linear-to-br from-secondary-500 cursor-pointer via-primary-500 to-primary-600 flex items-center justify-center text-white font-bold hover:shadow-lg hover:shadow-primary-500/30 transition-all"
            >
              {userName.charAt(0).toUpperCase()}
            </motion.button>

            <AnimatePresence>
              {isPopupOpen && (
                <UserPopup
                  userName={userName}
                  roomId={roomId}
                  isObserver={isObserver}
                  isAdmin={isAdmin}
                  onToggleObserver={handleToggleObserver}
                  onSaveName={onUpdateUserName}
                  onOpenCardSetModal={() => setIsCardSetModalOpen(true)}
                  onCloseRoom={onCloseRoom}
                  onLogout={onLogout}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      <CardSetModal
        isOpen={isCardSetModalOpen}
        onClose={() => setIsCardSetModalOpen(false)}
        cardSet={cardSet}
        onUpdateCardSet={onUpdateCardSet}
      />
    </>
  );
};
