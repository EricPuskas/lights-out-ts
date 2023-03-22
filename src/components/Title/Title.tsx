import { NeonText } from '../NeonText';

import { ContainerTitle } from './Title.styled';

export const Title: React.FC = () => {
  return (
    <ContainerTitle>
      <NeonText color="orange">Lights</NeonText>
      <NeonText color="blue">Out</NeonText>
    </ContainerTitle>
  );
};
