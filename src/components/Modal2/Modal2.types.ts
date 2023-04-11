export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  width?: number;
}

/**
 * Defines the content container props interface
 */
export interface ContentContainerProps {
  width?: number;
}
