'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, FEATURES } from '../utils';

export const FeaturesSection: React.FC = () => (
  <section className="px-4 py-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="max-w-5xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Todo lo que necesitas
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto">
          Funcionalidades diseñadas para hacer tu planificación más eficiente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center mb-3 group-hover:bg-primary-500/25 transition-colors">
              <feature.icon size={20} className="text-primary-400" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              {feature.label}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
