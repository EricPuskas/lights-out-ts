/**
 * Imports font awesome
 */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports styled components
 */
import { Container, IconContainer } from './BoardCell.styles';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Imports types
 */
import { BoardCellProps } from './BoardCell.types';

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;
  const { active, positionX, positionY } = cell;

  /**
   * Gets the game state
   */
  const { hints, moves, gridSize, board, toggleCellsAround } = useGame();

  /**
   * Handle click on the cell
   */
  const handleClick = () => {
    toggleCellsAround(cell, board);
  };

  const getHintStatus = () => {
    if (moves.length >= hints.length) return false;
    const [x, y] = hints[moves.length];

    return x === positionX && y === positionY;
  };
  console.log(getHintStatus());

  return (
    <Container
      gridSize={gridSize}
      active={active}
      onClick={handleClick}
      isHint={getHintStatus()}
    >
      {getHintStatus() && (
        <IconContainer>
          <FontAwesomeIcon icon={faStar} />
        </IconContainer>
      )}
    </Container>
  );
};
