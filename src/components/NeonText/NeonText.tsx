/**
 * Imports styles components
 */
import { Container } from './NeonText.styled';

/**
 * Imports hooks
 */
import { NeonTextProps } from './NeonText.types';

/**
 * Displays the component
 */
export const NeonText: React.FC<NeonTextProps> = (props) => {
  const { color, children } = props;
  return <Container color={color}>{children}</Container>;
};
