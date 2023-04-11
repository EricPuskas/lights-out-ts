/**
 * Imports font awesome
 */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports styled components
 */
import { Container } from './IconHints.styles';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const IconHints: React.FC = () => {
  /**
   * Gets the game state
   */
  const { helperOn, setHelperOn } = useGame();

  /**
   * Handles the click event
   */
  const handleClick = () => {
    setHelperOn(!helperOn);
  };

  return (
    <Container helperOn={helperOn} onClick={handleClick}>
      <FontAwesomeIcon icon={faStar} />
    </Container>
  );
};
