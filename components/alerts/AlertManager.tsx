"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from "lucide-react";
import { useAlert } from "@hooks/useAlert";
import { AlertType } from "@/types/alerts";

const alertIcons: Record<AlertType, React.ReactNode> = {
  success: <CheckCircle size={24} />,
  error: <AlertCircle size={24} />,
  warning: <AlertTriangle size={24} />,
  info: <Info size={24} />,
};

const alertStyles: Record<AlertType, string> = {
  success:
    "bg-gradient-to-r from-green-500/20 to-green-600/10 border-green-500/50 text-green-300",
  error:
    "bg-gradient-to-r from-red-500/20 to-red-600/10 border-red-500/50 text-red-300",
  warning:
    "bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-yellow-500/50 text-yellow-300",
  info: "bg-gradient-to-r from-blue-500/20 to-blue-600/10 border-blue-500/50 text-blue-300",
};

const alertIconColors: Record<AlertType, string> = {
  success: "text-green-400",
  error: "text-red-400",
  warning: "text-yellow-400",
  info: "text-blue-400",
};

export const AlertManager: React.FC = () => {
  const { alerts, removeAlert } = useAlert();

  return (
    <div className="fixed top-4 right-4 z-9999 w-full max-w-md space-y-3">
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: 400, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`p-4 rounded-lg border-2 backdrop-blur-xl ${alertStyles[alert.type]}`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`shrink-0 ${alertIconColors[alert.type]}`}>
                {alertIcons[alert.type]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">{alert.title}</h3>
                <p className="text-xs opacity-90">{alert.message}</p>

                {/* Action Button */}
                {alert.action && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={alert.action.onClick}
                    className="mt-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                  >
                    {alert.action.label}
                  </motion.button>
                )}
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => removeAlert(alert.id)}
                className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Progress bar for auto-dismiss */}
            {alert.duration !== "persistent" && (
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{
                  duration:
                    alert.duration === "short"
                      ? 3
                      : alert.duration === "medium"
                        ? 5
                        : 8,
                }}
                className="mt-2 h-1 bg-white/20 origin-left rounded-full"
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
