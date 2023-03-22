import React from 'react';
import { NeonTextProps } from './NeonText.types';
import { Container } from './NeonText.styled';

export const NeonText: React.FC<NeonTextProps> = (props) => {
  const { color, children } = props;
  return <Container color={color}>{children}</Container>;
};
