"use client";

import { useMemo } from "react";
import type { VotingAreaProps } from "../types";

export const useVotingArea = ({ votes }: Pick<VotingAreaProps, "votes">) => {
  const stats = useMemo(() => {
    if (votes.length === 0) return null;

    const numericalVotes = votes
      .map((v) => v.value)
      .filter((v): v is number => typeof v === "number");

    if (numericalVotes.length === 0) return null;

    const average =
      numericalVotes.reduce((a, b) => a + b, 0) / numericalVotes.length;
    const min = Math.min(...numericalVotes);
    const max = Math.max(...numericalVotes);

    return { average: average.toFixed(1), min, max };
  }, [votes]);

  return { stats };
};
