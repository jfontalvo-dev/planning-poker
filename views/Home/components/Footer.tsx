'use client';

import React from 'react';

export const Footer: React.FC = () => (
  <footer className="px-4 py-8 border-t border-white/5">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-xs font-bold text-white">PP</span>
        </div>
        <span className="text-sm font-semibold text-neutral-400">
          Planning Poker
        </span>
      </div>
      <p className="text-xs text-neutral-500">
        Hecho con <span className="text-pink-400">❤</span> para equipos ágiles
      </p>
    </div>
  </footer>
);
