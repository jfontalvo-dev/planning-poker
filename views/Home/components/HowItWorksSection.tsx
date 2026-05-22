'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, STEPS } from '../utils';

export const HowItWorksSection: React.FC = () => (
  <section className="px-4 py-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="max-w-3xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          3 pasos para empezar
        </h2>
        <p className="text-neutral-400">
          Comienza tu sesión de Planning Poker en segundos.
        </p>
      </motion.div>

      <div className="space-y-6">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-primary-500/20">
              {step.number}
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
