"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CardSelectorProps } from "../types";
import {
  cardSelectorContainerVariants,
  cardSelectorItemVariants,
} from "../utils";
import { useCardSelector } from "../hooks";

export const CardSelector: React.FC<CardSelectorProps> = ({
  cardSet,
  onVote,
  currentUserVote,
  isObserver,
  revealed,
}) => {
  const { scrollContainerRef, showArrows, scroll } = useCardSelector(cardSet);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-2  py-3 md:py-3"
    >
      <div className="flex flex-col justify-center w-full gap-2">
        {/* Etiqueta */}
        <div className="text-center mb-1">
          <p className="text-sm font-poppins font-semibold text-white-400 uppercase tracking-widest">
            {isObserver ? "Observador" : " Selecciona tu voto"}
          </p>
        </div>

        {/* Contenedor de cartas con scroll */}
        <div className="flex items-center justify-center gap-2">
          {/* Botón izquierdo */}
          {showArrows && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="hidden md:flex shrink-0 items-center cursor-pointer justify-center w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all"
            >
              <ChevronLeft size={16} />
            </motion.button>
          )}

          {/* Cartas */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto w-full   md:max-w-xl scrollbar-hide md:overflow-hidden"
          >
            <motion.div
              variants={cardSelectorContainerVariants}
              initial="hidden"
              animate="show"
              className="flex gap-2 pb-2 py-4 md:justify-center mx-auto"
            >
              {cardSet.values.map((value) => {
                const isSelected = currentUserVote?.value === value;

                return (
                  <motion.button
                    key={value}
                    variants={cardSelectorItemVariants}
                    whileHover={!isObserver && !revealed ? { scale: 1.15, rotateY: -5 } : {}}
                    whileTap={!isObserver && !revealed ? { scale: 0.9 } : {}}
                    onClick={() => !isObserver && !revealed && onVote(value)}
                    disabled={isObserver || revealed}
                    className={`shrink-0 w-10 h-18 md:w-14 md:h-20 max-w-16 rounded-xl font-bold text-base transition-all duration-200 border-2 ${
                      isSelected
                        ? "bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 border-primary-400 ring-2 ring-primary-400/30"
                        : "bg-linear-to-br from-neutral-700/70 to-neutral-800/70 text-neutral-400 hover:bg-linear-to-br hover:from-primary-600/50 hover:to-primary-700/50 border-neutral-700/50 hover:border-primary-500/50"
                    } ${
                      isObserver || revealed
                        ? "cursor-not-allowed opacity-60"
                        : "hover:text-white cursor-pointer hover:shadow-md hover:shadow-primary-500/30"
                    } flex items-center justify-center active:scale-95`}
                  >
                    {value}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Botón derecho */}
          {showArrows && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="hidden md:flex shrink-0 items-center cursor-pointer justify-center w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all"
            >
              <ChevronRight size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
