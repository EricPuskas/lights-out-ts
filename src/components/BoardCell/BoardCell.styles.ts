/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports types
 */
import { ContainerProps } from './BoardCell.types';

/**
 * Styles the Container
 */
export const Container = styled('div', {
  shouldForwardProp: (propName) =>
    propName !== 'active' && propName !== 'gridSize' && propName !== 'isHint',
})<ContainerProps>((props) => {
  const { active, gridSize, isHint } = props;

  const getSize = () => {
    if (gridSize > 5) return 50;
    if (gridSize > 3) return 95;
    return 100;
  };
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: getSize(),
    height: getSize(),
    backgroundColor: '#2633238',
    transition: 'backgroundColor 0.3s ease',
    border: '1px solid black',
    ...(active && {
      backgroundColor: '#f4c50a',
    }),
  };
});

/**
 * Styles the Icon Container
 */
export const IconContainer = styled('div')(() => {
  return {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: 'white',
    margin: '1rem 0',
    border: 'solid',
    padding: 12,
  };
});
