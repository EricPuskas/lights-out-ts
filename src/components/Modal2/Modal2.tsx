import React from 'react';
import { ModalProps } from './Modal2.types';
import {
  ModalOverlay,
  ModalContent,
  Title,
  ModalHeader,
  CloseButton,
} from './Modal2.styles';
/**
 * Imports font awesome
 */
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGame } from '../../hooks';

export const Modal2: React.FC<ModalProps> = (props) => {
  const { open, onClose, children, title, width } = props;
  const { history } = useGame();

  const preventPropagation = (event: React.MouseEvent<any, MouseEvent>) => {
    event.stopPropagation();
  };

  const handleClose = (event: React.MouseEvent<any, MouseEvent>) => {
    preventPropagation(event);
    onClose();
  };

  if (!open) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent width={width} onClick={preventPropagation}>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
