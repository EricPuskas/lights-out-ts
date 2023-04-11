/**
 * Imports styled components
 */
import {
  Container,
  Header,
  Date,
  Score,
  ScoreItem,
} from './RankingItem.styles';

/**
 * Imports types
 */
import { RankingItemProps } from './RankingItem.types';

/**
 * Imports hooks
 */
import { useGameUtils } from '../../hooks';

/**
 * Displays the component
 */
export const RankingItem: React.FC<RankingItemProps> = (props) => {
  const { id, moves, time } = props;

  /**
   * Gets the utils
   */
  const { formatTimestamp } = useGameUtils();

  return (
    <Container>
      <Header>
        <Date> {formatTimestamp(id as number)}</Date>
      </Header>
      <Score>
        <ScoreItem> Moves: {moves}</ScoreItem>
        <ScoreItem> Time: {time}</ScoreItem>
      </Score>
    </Container>
  );
};
