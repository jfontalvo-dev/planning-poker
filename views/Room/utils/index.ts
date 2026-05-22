// ─── Animation Variants ─────────────────────────────────────────────

export const sidebarContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const sidebarItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

// ─── Card Selector ────────────────────────────────────────────────

export const CARD_SCROLL_AMOUNT = 200;

export const cardSelectorContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const cardSelectorItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

// ─── Voting Area ────────────────────────────────────────────────────

export const MAX_PER_RING = 8;

export const getRingPositions = (count: number) => {
  const positions: { left: string; top: string }[] = [];
  let placed = 0;
  let ringIdx = 0;

  while (placed < count) {
    const remaining = count - placed;
    const ringCount = Math.min(MAX_PER_RING, remaining);
    const radiusPct = 30 + ringIdx * 14;

    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * 2 * Math.PI - Math.PI / 2;
      positions.push({
        left: `${50 + Math.cos(angle) * radiusPct}%`,
        top: `${50 + Math.sin(angle) * radiusPct}%`,
      });
    }

    placed += ringCount;
    ringIdx++;
  }

  return positions;
};

// ─── Card Presets ───────────────────────────────────────────────────

export const FIBONACCI_PRESET = {
  label: 'Fibonacci',
  type: 'fibonacci' as const,
  values: [0, 1, 2, 3, 5, 8, 13, 21],
};

// ─── Role Config ────────────────────────────────────────────────────

export const ROLE_CONFIG = {
  admin: { color: 'text-red-400', label: 'Admin' },
  user: { color: 'text-blue-400', label: 'Usuario' },
} as const;

// ─── Timer Config ───────────────────────────────────────────────────

export const TIMER_PRESET_SECONDS = [15, 30, 45, 60, 90];

export const TIMER_STATUS_STYLES = {
  idle: {
    bg: 'bg-neutral-800/60',
    border: 'border-neutral-700/50',
    text: 'text-neutral-400',
    icon: 'text-neutral-500',
    shadow: '',
  },
  running: {
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/40',
    text: 'text-primary-300',
    icon: 'text-primary-400',
    shadow: 'shadow-lg shadow-primary-500/10',
  },
  paused: {
    bg: 'bg-neutral-800/70',
    border: 'border-neutral-600/50',
    text: 'text-neutral-300',
    icon: 'text-neutral-400',
    shadow: '',
  },
  finished: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
    shadow: 'shadow-lg shadow-emerald-500/10',
  },
} as const;