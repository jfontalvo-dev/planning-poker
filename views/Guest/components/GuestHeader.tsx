"use client";

import React from "react";
import { motion } from "framer-motion";

export const GuestHeader: React.FC = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
      className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/50"
    >
      <span className="text-2xl font-bold text-white">PP</span>
    </motion.div>

    <h1 className="text-2xl font-bold text-center text-white mb-2">
      Bienvenido a Planning Poker
    </h1>

    <p className="text-center text-neutral-300 text-sm mb-6">
      Ha sido invitado a una sala de votación
    </p>
  </>
);
