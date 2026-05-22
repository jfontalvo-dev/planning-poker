'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../utils';

export const LandingHeader: React.FC = () => (
  <motion.div variants={itemVariants} className="text-center mb-6">
    <motion.div
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="w-16 h-16 mx-auto mb-3 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse-glow"
    >
      <span className="text-3xl font-extrabold text-white">PP</span>
    </motion.div>
    <h1 className="text-3xl font-extrabold text-white mb-2">
      Planning Poker
    </h1>
    <p className="text-neutral-300 text-sm font-medium">
      Votación en tiempo real para tu equipo Scrum
    </p>
  </motion.div>
);
