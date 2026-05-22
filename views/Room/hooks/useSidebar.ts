"use client";

import { useCallback, useMemo } from "react";
import type { Vote } from "@/types";
import type { SidebarProps } from "../types";

export const useSidebar = ({ users, votes }: SidebarProps) => {
  const getUserVote = useCallback(
    (userId: string): Vote | undefined =>
      votes.find((v) => v.userId === userId),
    [votes],
  );

  const voterCount = useMemo(
    () => users.filter((u) => !u.isObserver).length,
    [users],
  );

  return { getUserVote, voterCount };
};
