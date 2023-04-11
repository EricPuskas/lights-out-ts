/**
 * Imports components
 */
import { Modal } from '../Modal';
import { HistoryItem } from '../HistoryItem';

/**
 * Imports font awesome
 */
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports styled components
 */
import { Container, Button, HistoryContainer } from './GameHistory.styles';

/**
 * Imports hooks
 */
import { useGame, useGameUtils, useModal } from '../../hooks';

/**
 * Displays the component
 */
export const GameHistory: React.FC = () => {
  /**
   * Gets the game state
   */
  const { clearHistory, history } = useGame();

  /**
   * Gets the modal state
   */
  const { open, openModal, closeModal } = useModal();

  /**
   * Gets utils
   */
  const { reverseArray } = useGameUtils();

  /**
   * Handles rendering the history items
   */
  const renderHistoryItems = () => {
    return reverseArray(history).map((item) => (
      <HistoryItem key={item.id} {...item} />
    ));
  };

  if (!history || history.length === 0) {
    return null;
  }

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal title="Game History" open={open} onClose={closeModal}>
        <Button onClick={clearHistory}>Clear History</Button>
        <HistoryContainer>{renderHistoryItems()}</HistoryContainer>
      </Modal>
    </Container>
  );
};
