'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils';
import type { FormErrors } from '../types';

interface CTAFormSectionProps {
  userName: string;
  errors: FormErrors;
  isLoading: boolean;
  isUserStored: boolean;
  onUserNameChange: (value: string) => void;
  onCreateRoom: (e: React.FormEvent) => void;
  onOpenJoinModal: () => void;
}

export const CTAFormSection = React.forwardRef<HTMLDivElement, CTAFormSectionProps>(
  (
    {
      userName,
      errors,
      isLoading,
      isUserStored,
      onUserNameChange,
      onCreateRoom,
      onOpenJoinModal,
    },
    ref,
  ) => (
    <section ref={ref} className="px-4 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-md mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            ¿Listo para planificar?
          </h2>
          <p className="text-neutral-400">
            Crea tu sala ahora y empieza a estimar con tu equipo.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
        >
          {/* Name input */}
          <div className="space-y-1 mb-4">
            <label className="text-sm font-semibold text-neutral-200">
              Tu nombre
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => onUserNameChange(e.target.value)}
              placeholder="Ingresa tu nombre"
              disabled={isUserStored}
              className={`w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500/50 text-sm font-medium transition-all ${
                isUserStored ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
            {errors.userName && (
              <p className="text-red-400 text-xs mt-1">{errors.userName}</p>
            )}
          </div>

          {/* Create button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCreateRoom}
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-linear-to-r from-primary-500 to-purple-500 text-white font-bold text-sm shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Zap size={16} />
                </motion.div>
                Creando sala...
              </>
            ) : (
              <>
                <Zap size={18} />
                Crear Sala
              </>
            )}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-neutral-500">o</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Join button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenJoinModal}
            className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowRight size={16} />
            Unirse a una sala existente
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  ),
);

CTAFormSection.displayName = 'CTAFormSection';
