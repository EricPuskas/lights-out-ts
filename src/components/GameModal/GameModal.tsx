/**
 * Imports components
 */
import { Modal } from '../Modal';

/**
 * Imports styles
 */
import { ModalProvider } from './GameModal.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GameModal: React.FC = () => {
  const { winner, handleOpenModal } = useGame();

  if (!winner) return null;

  return (
    <ModalProvider>
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal>
          <h2>Modal Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            delectus consequatur asperiores fugit! Non nesciunt dicta tempora
            eaque itaque? Quidem, quia? Iste temporibus delectus provident
            placeat porro fugit deleniti culpa!
          </p>
        </Modal>
      </div>
    </ModalProvider>
  );
};
