'use client';

import { useState, useCallback, useMemo } from 'react';
import type { CardSet } from '@/types';
import { FIBONACCI_PRESET } from '../utils';

const parseValues = (text: string) =>
  Array.from(
    new Set(
      text
        .split(',')
        .map((v) => parseInt(v.trim(), 10))
        .filter((v) => !isNaN(v)),
    ),
  ).sort((a, b) => a - b);

interface UseCardSetModalProps {
  cardSet: CardSet;
  onUpdateCardSet: (cardSet: CardSet) => void;
  onClose: () => void;
}

export const useCardSetModal = ({ cardSet, onUpdateCardSet, onClose }: UseCardSetModalProps) => {
  const [customCards, setCustomCards] = useState(cardSet.values.join(', '));

  const currentValues = cardSet.values.join(', ');
  const hasChanges = customCards.trim() !== currentValues && parseValues(customCards).length > 0;

  const hasDuplicates = useMemo(() => {
    const values = customCards
      .split(',')
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v));
    return values.length !== new Set(values).size;
  }, [customCards]);

  const handleApply = useCallback(() => {
    const unique = parseValues(customCards);
    if (unique.length > 0) {
      onUpdateCardSet({ type: 'custom', values: unique });
      onClose();
    }
  }, [customCards, onUpdateCardSet, onClose]);

  const handleRestore = useCallback(() => {
    setCustomCards(FIBONACCI_PRESET.values.join(', '));
  }, []);

  return {
    customCards,
    setCustomCards,
    hasChanges,
    hasDuplicates,
    handleApply,
    handleRestore,
  };
};
