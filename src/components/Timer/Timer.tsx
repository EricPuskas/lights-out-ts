import React from 'react';
import { useGame } from '../../hooks';
import { Container } from './Timer.styled';

export const Timer = () => {
  const { timer, winner } = useGame();
  if (!winner) return null;
  return (
    <Container>
      {' '}
      {'Time:'} {timer.minutes}:
      {timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}{' '}
    </Container>
  );
};
