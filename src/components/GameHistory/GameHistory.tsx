import React from 'react';
import { Container } from './GameHistory.styles';
import { HistoryItem } from '../HistoryItem';
import { GameHistoryItem } from '../../types';

import { Modal2 } from '../Modal2';
import { useGame, useModal } from '../../hooks';

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const GameHistory: React.FC<GameHistoryItem> = () => {
  const { open, openModal, closeModal } = useModal();
  const { clearHistory } = useGame();

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal2 title="Game History" open={open} onClose={closeModal}>
        <h1>GameHistory</h1>
        <button onClick={clearHistory}>Clear History</button>
        <HistoryItem />
      </Modal2>
    </Container>
  );
};
