import React from 'react';
import { Container } from './GameHistory.styles';
import { GameHistoryItem } from './GameHistory.types';

import { Modal2 } from '../Modal2';
import { useGame, useGameUtils, useModal } from '../../hooks';

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GameHistory: React.FC<GameHistoryItem> = () => {
  const { open, openModal, closeModal } = useModal();
  const { gameMode, gridSize, moves, timer, history } = useGame();
  const { formatTimestamp } = useGameUtils();

  const formattedTime = `${timer.minutes}:${
    timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds
  }`;

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal2 title="Game History" open={open} onClose={closeModal}>
        <h1>GameHistory</h1>
        {history.map((historyItem, index) => {
          return (
            <div key={index}>
              <h3>Grid Size: {historyItem.gridSize}</h3>
              <h3>Moves: {historyItem.moves}</h3>
              <h3>Mode: {historyItem.mode}</h3>
              <h3>Time: {historyItem.time}</h3>
              <h3>Date: {formatTimestamp(historyItem.id as number)}</h3>
            </div>
          );
        })}
      </Modal2>
    </Container>
  );
};
