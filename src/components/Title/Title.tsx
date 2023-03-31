/**
 * Imports components
 */
import { NeonText } from '../NeonText';
import { GameModeSwitch } from '../GameModeSwitch';

/**
 * Imports styles components
 */
import { ContainerTitle } from './Title.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const Title: React.FC = () => {
  const { gameMode } = useGame();
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
