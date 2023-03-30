import React from 'react';
import { useGame } from '../../hooks';
/**
 * Imports components
 */
import { NeonText } from '../NeonText';

export const GameMessage: React.FC = () => {
  const { winner } = useGame();
  if (!winner) return null;
  return (
    <NeonText color="orange" fontSize={120}>
      You Win
    </NeonText>
  );
};
