'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="inline-block"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            404
          </div>
        </motion.div>

        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Sala No Encontrada</h1>
          <p className="text-neutral-400">
            La sala que buscas no existe o ha sido cerrada.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
        >
          <Home size={18} />
          Volver al Inicio
        </motion.button>
      </motion.div>
    </div>
  );
};
