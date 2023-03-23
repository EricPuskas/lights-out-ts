import React from 'react';

import { GameResetProps } from './GameReset.types';
import { Container, Button } from './GameReset.styled';

export const GameReset: React.FC<GameResetProps> = (props) => {
  const { handleResetGame } = props;

  return (
    <Container>
      <Button onClick={handleResetGame}>Play Again</Button>
    </Container>
  );
};
