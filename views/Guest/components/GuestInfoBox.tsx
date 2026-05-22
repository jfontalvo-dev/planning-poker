"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import type { GuestInfoBoxProps } from "../types";

export const GuestInfoBox: React.FC<GuestInfoBoxProps> = ({ roomId }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-6 p-4 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-start gap-3"
  >
    <Lock size={18} className="text-primary-400 shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-semibold text-primary-300 mb-1">
        Acceso seguro
      </p>
      <p className="text-xs text-neutral-400">
        Ingresa tu nombre para unirte a la sala {roomId}
      </p>
    </div>
  </motion.div>
);
