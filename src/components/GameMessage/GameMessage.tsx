/**
 * Imports  styled components
 */
import { NeonText } from '../NeonText';
import { Container } from './GameMessage.styles';

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
    <Container>
      <NeonText color="blue">Congratulations!</NeonText>
      <NeonText color="orange">You Win!</NeonText>
    </Container>
  );
};
