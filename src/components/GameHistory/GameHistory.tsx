import React from 'react';
import { Container, Button, HistoryContainer } from './GameHistory.styles';
import { HistoryItem } from '../HistoryItem';
import { GameHistoryItem } from '../../types';

import { Modal2 } from '../Modal2';
import { useGame, useGameUtils, useModal } from '../../hooks';

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GameHistory: React.FC<GameHistoryItem> = () => {
  const { open, openModal, closeModal } = useModal();
  const { clearHistory, history } = useGame();
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
      <Modal2 title="Game History" open={open} onClose={closeModal}>
        <Button onClick={clearHistory}>Clear History</Button>
        <HistoryContainer>{renderHistoryItems()}</HistoryContainer>
      </Modal2>
    </Container>
  );
};
