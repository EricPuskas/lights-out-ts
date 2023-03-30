import React from 'react';
import { useGame } from '../../hooks';
import { Container } from './NumClicks.styled';

export const NumClicks = () => {
  const { numClicks } = useGame();

  return <Container>Number of Moves: {numClicks}</Container>;
};
