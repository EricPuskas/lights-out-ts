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
    <div>
      <NeonText color="blue">Congratulations!</NeonText>
      <NeonText color="orange">You Win!</NeonText>
    </div>
  );
};
