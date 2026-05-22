"use client";

import { useState, useCallback } from "react";
import type { UserPopupProps } from "../types";

export const useUserPopup = ({
  userName,
  onSaveName,
}: Pick<UserPopupProps, "userName" | "onSaveName">) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleSave = useCallback(() => {
    const trimmed = newName.trim();
    if (trimmed && trimmed !== userName) {
      onSaveName(trimmed);
    }
    setIsEditing(false);
  }, [newName, userName, onSaveName]);

  const handleCancel = useCallback(() => {
    setNewName(userName);
    setIsEditing(false);
  }, [userName]);

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return {
    isEditing,
    newName,
    setNewName,
    handleSave,
    handleCancel,
    startEditing,
  };
};
