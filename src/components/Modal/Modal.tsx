import ReactDom from 'react-dom';
/**
 * Imports style
 */
import { ModalOverlay, ModalContent, ModalCloseButton } from './Modal.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Imports types
 */
import { ModalProps } from './Modal.types';

/**
 * Displays component
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const { children } = props;
  const { isOpen, handleCloseModal } = useGame();

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <ModalOverlay onClick={handleCloseModal}>
        <ModalContent
          style={{
            width: '80%',
            maxWidth: 500,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <ModalCloseButton onClick={handleCloseModal}>Close</ModalCloseButton>
        </ModalContent>
      </ModalOverlay>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};
