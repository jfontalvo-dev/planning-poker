"use client";

import { useState, useCallback, useEffect } from "react";
import type { FormErrors, UseLandingFormProps } from "../types";
import { validateUserName, validateRoomId } from "../utils";

export const useLandingForm = ({
  onCreateRoom,
  onJoinRoom,
  defaultUserName,
}: UseLandingFormProps) => {
  const [userName, setUserName] = useState(defaultUserName);
  const [roomId, setRoomId] = useState("");
  const [mode, setMode] = useState<"home" | "join">("home");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (defaultUserName) {
      setUserName(defaultUserName);
    }
  }, [defaultUserName]);

  const handleCreateRoom = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const userNameError = validateUserName(userName);
      if (userNameError) {
        setErrors({ userName: userNameError });
        return;
      }
      setErrors({});
      onCreateRoom(userName.trim());
    },
    [userName, onCreateRoom],
  );

  const handleJoinRoom = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: FormErrors = {};
      const userNameError = validateUserName(userName);
      const roomIdError = validateRoomId(roomId);

      if (userNameError) newErrors.userName = userNameError;
      if (roomIdError) newErrors.roomId = roomIdError;

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      onJoinRoom(roomId.toUpperCase(), userName.trim());
    },
    [userName, roomId, onJoinRoom],
  );

  const handleUserNameChange = useCallback(
    (value: string) => {
      setUserName(value);
      if (errors.userName)
        setErrors((prev) => ({ ...prev, userName: undefined }));
    },
    [errors.userName],
  );

  const handleRoomIdChange = useCallback(
    (value: string) => {
      setRoomId(value.toUpperCase());
      if (errors.roomId) setErrors((prev) => ({ ...prev, roomId: undefined }));
    },
    [errors.roomId],
  );

  const switchToJoin = useCallback(() => {
    setMode("join");
    setErrors({});
  }, []);

  const switchToHome = useCallback(() => {
    setMode("home");
    setErrors({});
  }, []);

  return {
    userName,
    roomId,
    mode,
    errors,
    handleCreateRoom,
    handleJoinRoom,
    handleUserNameChange,
    handleRoomIdChange,
    switchToJoin,
    switchToHome,
  };
};
