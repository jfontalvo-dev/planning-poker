import { Zap, Users, Lock, BarChart3, Timer, Eye, Settings, Shield } from 'lucide-react';

// ─── Animation Variants ─────────────────────────────────────────────

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// ─── Landing Content ────────────────────────────────────────────────

export const FEATURES = [
  { icon: Zap, label: 'Tiempo Real', description: 'Los votos se sincronizan instantáneamente entre todos los participantes.' },
  { icon: Users, label: 'Hasta 20 usuarios', description: 'Invita a todo tu equipo a participar en la estimación.' },
  { icon: Lock, label: 'Salas Privadas', description: 'Cada sala tiene un código único. Solo entra quien tú invites.' },
  { icon: BarChart3, label: 'Estadísticas', description: 'Promedio, mínimo y máximo al revelar los votos.' },
  { icon: Timer, label: 'Temporizador', description: 'Controla el tiempo de votación con presets configurables.' },
  { icon: Eye, label: 'Modo Observador', description: 'Participa sin votar. Ideal para Scrum Masters o stakeholders.' },
  { icon: Settings, label: 'Cartas Personalizables', description: 'Fibonacci, secuencias cortas o define tus propios valores.' },
  { icon: Shield, label: 'Sin Registro', description: 'Empieza a usar la herramienta al instante, sin crear cuenta.' },
] as const;

export const STEPS = [
  { number: '1', title: 'Crea una sala', description: 'Ingresa tu nombre y crea una sala en un click.' },
  { number: '2', title: 'Invita a tu equipo', description: 'Comparte el enlace o código de la sala con tu equipo.' },
  { number: '3', title: 'Voten y revelen', description: 'Seleccionen sus cartas y revelen los resultados juntos.' },
] as const;

// ─── Validation ─────────────────────────────────────────────────────

export const validateUserName = (name: string): string | undefined => {
  if (!name.trim() || name.trim().length < 2) {
    return 'El nombre debe tener al menos 2 caracteres';
  }
  return undefined;
};

export const validateRoomId = (id: string): string | undefined => {
  if (!id.trim() || id.trim().length < 3) {
    return 'Ingresa un ID de sala válido';
  }
  return undefined;
};
