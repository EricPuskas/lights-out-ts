import React from 'react';

/**
 * Imports components
 */
import { NeonText } from '../NeonText';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GameMessage: React.FC = () => {
  const { winner } = useGame();
  if (!winner) return null;
  return (
    <NeonText color="orange" fontSize={120}>
      You Win
    </NeonText>
  );
};
