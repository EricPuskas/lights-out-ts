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
  const { numClicks } = useGame();

  return <Container>Number of Moves: {numClicks}</Container>;
};
