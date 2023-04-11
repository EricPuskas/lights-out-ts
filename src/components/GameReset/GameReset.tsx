/**
 * Import styles components
 */
import { Container, Button } from './GameReset.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GameReset: React.FC = () => {
  /**
   * Gets the game state
   */
  const { handleResetGame } = useGame();

  return (
    <Container>
      <Button onClick={handleResetGame}>Play Again</Button>
    </Container>
  );
};
