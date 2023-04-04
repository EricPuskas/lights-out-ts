/**
 * Imports styles components
 */
import { Container } from './NumClicks.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const NumClicks = () => {
  const { moves } = useGame();

  return <Container>Number of Moves: {moves.length}</Container>;
};
