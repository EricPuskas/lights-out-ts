import React from 'react';
import { Container } from './GameHistory.styles';

import { Modal2 } from '../Modal2';
import { useModal } from '../../hooks';

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GameHistory: React.FC = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal2 title="Game History" open={open} onClose={closeModal}>
        <h1>GameHistory</h1>
      </Modal2>
    </Container>
  );
};
