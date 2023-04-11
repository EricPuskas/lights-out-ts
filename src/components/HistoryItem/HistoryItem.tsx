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

  // const handleDelete = (index: number) => {
  //   deleteHistoryItem(index);
  // };

  /**
   * Defines the delete handler
   */
  const handleDelete = () => {
    deleteHistoryItem(id as number);
  };

  // return (
  //   <Container>
  //     {history.map((historyItem, index) => {
  //       return (
  //         <HistoryStats key={index}>
  //           <DeleteButton onClick={() => handleDelete(index)}>
  //             <FontAwesomeIcon icon={faTrashAlt} />
  //           </DeleteButton>
  //           <h3>Grid Size: {historyItem.gridSize}</h3>
  //           <h3>Moves: {historyItem.moves}</h3>
  //           <h3>Mode: {historyItem.mode}</h3>
  //           <h3>Time: {historyItem.time}</h3>
  //           <h3> {formatTimestamp(historyItem.id as number)}</h3>
  //         </HistoryStats>
  //       );
  //     })}
  //   </Container>
  // );

  return (
    <Container>
      <Header>
        <Date> {formatTimestamp(id as number)}</Date>
        <GridSize>{formatGridSize(gridSize)}</GridSize>
        <GameMode> Mode: {mode}</GameMode>
      </Header>
      <Score>
        <ScoreItem> Moves: {moves}</ScoreItem>
        <ScoreItem> Time: {time}</ScoreItem>
      </Score>
      <DeleteContainer onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </DeleteContainer>
    </Container>
  );
};
