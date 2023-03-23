import { NeonText } from '../NeonText';
import { GameModeSwitch } from '../GameModeSwitch';
import { TitleProps } from './Title.types';

import { ContainerTitle } from './Title.styled';

export const Title: React.FC<TitleProps> = (props) => {
  const { gameMode, changeGameMode } = props;
  return (
    <ContainerTitle>
      <NeonText color="orange">Lights</NeonText>
      <NeonText color="blue">
        {gameMode === 'lights-out' ? 'Out' : 'On'}
      </NeonText>

      <GameModeSwitch gameMode={gameMode} changeGameMode={changeGameMode} />
    </ContainerTitle>
  );
};
