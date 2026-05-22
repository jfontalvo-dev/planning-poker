"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import type { CardSet } from "@/types";
import { CARD_SCROLL_AMOUNT } from "../utils";

export const useCardSelector = (cardSet: CardSet) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const checkOverflow = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setShowArrows(el.scrollWidth > el.clientWidth);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [checkOverflow, cardSet.values]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -CARD_SCROLL_AMOUNT : CARD_SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  }, []);

  return {
    scrollContainerRef,
    showArrows,
    scroll,
  };
};
