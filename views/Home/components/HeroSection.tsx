'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, ArrowDown } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils';

interface HeroSectionProps {
  onScrollToForm: () => void;
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToForm,
  onOpenJoinModal,
}) => (
  <section className="relative min-h-screen flex items-center justify-center px-4">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/15 rounded-full blur-[120px] pointer-events-none" />

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative text-center max-w-3xl mx-auto z-10"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-4 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/40"
        >
          <span className="text-4xl font-extrabold text-white">PP</span>
        </motion.div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
      >
        Estimación{' '}
        <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ágil y Simple
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl mx-auto"
      >
        Planning Poker en tiempo real para tu equipo Scrum. Sin registro, sin
        complicaciones.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onScrollToForm}
          className="btn px-8 py-3.5 bg-white text-primary-700 hover:bg-neutral-100 border-none font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer"
        >
          <Zap size={20} />
          Iniciar Reunión
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenJoinModal}
          className="btn px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 font-semibold text-base transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer"
        >
          <Users size={20} />
          Unirse a Sala
        </motion.button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-3 justify-center text-xs text-neutral-400"
      >
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          Sin registro
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          100% Gratis
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          Hasta 20 usuarios
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-12"
      >
        <ArrowDown size={20} className="mx-auto text-neutral-500" />
      </motion.div>
    </motion.div>
  </section>
);
