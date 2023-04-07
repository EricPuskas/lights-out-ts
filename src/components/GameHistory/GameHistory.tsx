import React from 'react';
import { Container, Button } from './GameHistory.styles';
import { HistoryItem } from '../HistoryItem';
import { GameHistoryItem } from '../../types';

import { Modal2 } from '../Modal2';
import { useGame, useModal } from '../../hooks';

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GameHistory: React.FC<GameHistoryItem> = () => {
  const { open, openModal, closeModal } = useModal();
  const { clearHistory, history } = useGame();

  if (!history || history.length === 0) {
    return null;
  }

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal2 title="Game History" open={open} onClose={closeModal}>
        <Button onClick={clearHistory}>Clear History</Button>
        <HistoryItem />
      </Modal2>
    </Container>
  );
};
