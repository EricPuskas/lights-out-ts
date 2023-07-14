import React from 'react';
import { useGame, useGameUtils } from '../../hooks';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HistoryItemProps } from './HistoryItem.types';

/**
 * Imports styled components
 */
import {
  Date,
  Score,
  Header,
  GridSize,
  GameMode,
  Container,
  ScoreItem,
  DeleteContainer,
} from './HistoryItem.styled';

/**
 * Displays the component
 */
export const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  const { id, mode, moves, gridSize, time } = props;
  const { deleteHistoryItem } = useGame();
  const { formatTimestamp, formatGridSize } = useGameUtils();

  /**
   * Defines the delete handler
   */
  const handleDelete = () => {
    deleteHistoryItem(id as number);
  };

  return (
    <Container>
      <Header className="header">
        <Date className="date"> {formatTimestamp(id as number)}</Date>
        <GridSize className="gridsize">{formatGridSize(gridSize)}</GridSize>
        <GameMode className="game-mode"> Mode: {mode}</GameMode>
      </Header>
      <Score className="score">
        <ScoreItem className="score-item-moves"> Moves: {moves}</ScoreItem>
        <ScoreItem className="score-item-time"> Time: {time}</ScoreItem>
      </Score>
      <DeleteContainer onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </DeleteContainer>
    </Container>
  );
};
