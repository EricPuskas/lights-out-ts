import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  /**
   * Handles toggling the modal state
   */
  const toggleModal = () => setOpen((prevState) => !prevState);
  return {
    openModal,
    closeModal,
    toggleModal,
    open,
  };
};
