"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useAlert } from "@hooks";

interface UseHeaderProps {
  roomId: string;
  onToggleObserver: () => void;
}

export const useHeader = ({ roomId, onToggleObserver }: UseHeaderProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { addAlert } = useAlert();

  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const togglePopup = useCallback(() => {
    setIsPopupOpen((prev) => !prev);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const handleShareRoom = useCallback(async () => {
    const roomLink = `${window.location.origin}/room/${roomId}`;
    try {
      await navigator.clipboard.writeText(roomLink);
      addAlert({
        type: "success",
        title: "Enlace copiado",
        message: "El enlace de la sala se copió al portapapeles",
        duration: "short",
      });
    } catch {
      console.error("Error copying to clipboard");
      addAlert({
        type: "error",
        title: "Error",
        message: "No se pudo copiar el enlace",
        duration: "medium",
      });
    }
  }, [roomId, addAlert]);

  const handleToggleObserver = useCallback(() => {
    onToggleObserver();
  }, [onToggleObserver]);

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopupOpen]);

  return {
    today,
    isPopupOpen,
    popupRef,
    togglePopup,
    closePopup,
    handleShareRoom,
    handleToggleObserver,
  };
};
