import React from 'react';
import { useGame } from '../../hooks';
import { useGameUtils } from '../../hooks';
import { Container, HistoryStats, DeleteButton } from './HistoryItem.styled';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HistoryItem: React.FC = () => {
  const { history, deleteHistoryItem } = useGame();
  const { formatTimestamp } = useGameUtils();

  const handleDelete = (index: number) => {
    deleteHistoryItem(index);
  };

  return (
    <Container>
      {history.map((historyItem, index) => {
        return (
          <HistoryStats key={index}>
            <DeleteButton onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </DeleteButton>
            <h3>Grid Size: {historyItem.gridSize}</h3>
            <h3>Moves: {historyItem.moves}</h3>
            <h3>Mode: {historyItem.mode}</h3>
            <h3>Time: {historyItem.time}</h3>
            <h3> {formatTimestamp(historyItem.id as number)}</h3>
          </HistoryStats>
        );
      })}
    </Container>
  );
};
