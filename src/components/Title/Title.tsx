import { NeonText } from '../NeonText';
import { GameModeSwitch } from '../GameModeSwitch';
// import { TitleProps } from './Title.types';
import { useGame } from '../../hooks';
import { ContainerTitle } from './Title.styled';

export const Title: React.FC = () => {
  const { gameMode, changeGameMode } = useGame();
  return (
    <ContainerTitle>
      <NeonText color="orange">Lights</NeonText>
      <NeonText color="blue">
        {gameMode === 'lights-out' ? 'Out' : 'On'}
      </NeonText>

      <GameModeSwitch />
    </ContainerTitle>
  );
};
