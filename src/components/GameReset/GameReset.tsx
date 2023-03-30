import React from 'react';

// import { GameResetProps } from './GameReset.types';
import { Container, Button } from './GameReset.styled';
import { useGame } from '../../hooks';

export const GameReset: React.FC = () => {
  const { handleResetGame } = useGame();

  return (
    <Container>
      <Button onClick={handleResetGame}>Play Again</Button>
    </Container>
  );
};
