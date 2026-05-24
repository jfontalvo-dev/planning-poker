'use client';

import type { Alert as AlertType } from '@/types/alerts';
import { useAlert } from '@hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, TriangleAlert, X, XCircle } from 'lucide-react';
import React from 'react';

const alertToneConfig: Record<
  AlertType['type'],
  {
    container: string;
    icon: React.ComponentType<{ className?: string }>;
    iconWrapper: string;
    title: string;
  }
> = {
  success: {
    container:
      'border-emerald-400/30 bg-emerald-500/15 text-emerald-50 shadow-[0_20px_60px_rgba(16,185,129,0.18)]',
    icon: CheckCircle2,
    iconWrapper: 'bg-emerald-400/15 text-emerald-200',
    title: 'Operación exitosa',
  },
  error: {
    container:
      'border-rose-400/30 bg-rose-500/15 text-rose-50 shadow-[0_20px_60px_rgba(244,63,94,0.18)]',
    icon: XCircle,
    iconWrapper: 'bg-rose-400/15 text-rose-200',
    title: 'Se produjo un error',
  },
  warning: {
    container:
      'border-amber-400/30 bg-amber-500/15 text-amber-50 shadow-[0_20px_60px_rgba(245,158,11,0.18)]',
    icon: TriangleAlert,
    iconWrapper: 'bg-amber-400/15 text-amber-200',
    title: 'Atención requerida',
  },
  info: {
    container:
      'border-sky-400/30 bg-sky-500/15 text-sky-50 shadow-[0_20px_60px_rgba(14,165,233,0.18)]',
    icon: Info,
    iconWrapper: 'bg-sky-400/15 text-sky-200',
    title: 'Información',
  },
};

export const AlertManager: React.FC = () => {
  const { alerts, removeAlert } = useAlert();

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed right-4 top-4 z-[70] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6"
    >
      <AnimatePresence initial={false} mode="popLayout">
        {alerts.map((alert) => {
          const tone = alertToneConfig[alert.type];
          const Icon = tone.icon;

          return (
            <motion.article
              key={alert.id}
              layout
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={`pointer-events-auto overflow-hidden rounded-2xl border backdrop-blur-xl ${tone.container}`}
              role="status"
            >
              <div className="flex items-start gap-3 p-4">
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone.iconWrapper}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white">
                        {alert.title || tone.title}
                      </p>
                      <p className="text-sm leading-relaxed text-white/80">
                        {alert.message}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeAlert(alert.id)}
                      className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
                      aria-label="Cerrar alerta"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {alert.action ? (
                    <button
                      type="button"
                      onClick={() => {
                        alert.action?.onClick();
                        removeAlert(alert.id);
                      }}
                      className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:bg-white/15"
                    >
                      {alert.action.label}
                    </button>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>

      {alerts.length === 0 ? null : (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="sr-only"
        >
          {alerts.length} alertas activas
        </motion.div>
      )}
    </div>
  );
};
