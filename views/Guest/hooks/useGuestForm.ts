"use client";

import { useState, useCallback } from "react";
import type { GuestFormErrors, UseGuestFormProps } from "../types";

export const useGuestForm = ({ onJoin }: UseGuestFormProps) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState<GuestFormErrors>({});

  const handleUserNameChange = useCallback(
    (value: string) => {
      setUserName(value);
      if (error.userName) setError({});
    },
    [error.userName],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!userName.trim() || userName.trim().length < 2) {
        setError({ userName: "El nombre debe tener al menos 2 caracteres" });
        return;
      }

      setError({});
      onJoin(userName.trim());
    },
    [userName, onJoin],
  );

  return {
    userName,
    error,
    handleUserNameChange,
    handleSubmit,
  };
};
