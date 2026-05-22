"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { CardSetModalProps } from "../types";
import { useCardSetModal } from "../hooks";
export const CardSetModal: React.FC<CardSetModalProps> = ({
  isOpen,
  onClose,
  cardSet,
  onUpdateCardSet,
}) => {
  const {
    customCards,
    setCustomCards,
    hasChanges,
    hasDuplicates,
    handleApply,
    handleRestore,
  } = useCardSetModal({ cardSet, onUpdateCardSet, onClose });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-sm bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-700/50">
                <h3 className="text-base font-bold text-white">
                  Configuración de cartas
                </h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="px-5 py-4 space-y-4">
                {/* Current cards preview */}
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Cartas actuales
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cardSet.values.map((v) => (
                      <span
                        key={v}
                        className="px-2.5 py-1 rounded-lg bg-primary-500/15 border border-primary-500/30 text-xs font-mono font-semibold text-primary-300"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Restaurar Fibonacci */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRestore}
                    className="w-full py-2 rounded-xl text-xs font-medium cursor-pointer transition-all border bg-neutral-700/40 border-neutral-600/40 text-neutral-300 hover:bg-neutral-700/60 hover:text-white"
                  >
                    Restaurar Fibonacci
                  </motion.button>
                </div>

                {/* Custom */}
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Personalizado
                  </p>
                  <textarea
                    value={customCards}
                    onChange={(e) => setCustomCards(e.target.value)}
                    rows={4}
                    placeholder="0, 1, 2, 3, 5, 8, 13, 21"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-700/40 border border-neutral-600/40 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 resize-none"
                  />
                  {hasDuplicates && (
                    <p className="text-xs text-red-400 mt-1">
                      No se permiten valores duplicados
                    </p>
                  )}
                  <motion.button
                    whileHover={
                      hasChanges && !hasDuplicates ? { scale: 1.02 } : {}
                    }
                    whileTap={
                      hasChanges && !hasDuplicates ? { scale: 0.98 } : {}
                    }
                    onClick={handleApply}
                    disabled={!hasChanges || hasDuplicates}
                    className={`mt-2 w-full py-2 rounded-xl border text-sm font-medium transition-all ${
                      hasChanges && !hasDuplicates
                        ? "bg-primary-500/20 hover:bg-primary-500/30 border-primary-500/40 text-primary-300 hover:text-primary-200 cursor-pointer"
                        : "bg-neutral-700/20 border-neutral-700/30 text-neutral-500 cursor-not-allowed"
                    }`}
                  >
                    Aplicar
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
