/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports types
 */
import { ButtonProps } from './GridSizeSelector.types';

/**
 *  Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    gap: 50,
    margin: '10px  0',
    '@media (max-width: 768px)': {
      marginTop: 20,
      marginBottom: 30,
    },
    '@media (max-width: 391px)': {
      marginTop: 20,
      marginBottom: 20,
    },
  };
});

/**
 *  Styles the Button
 */
export const Button = styled('button', {
  shouldForwardProp: (propName) => propName !== 'active',
})<ButtonProps>((props) => {
  const { active } = props;
  return {
    padding: 20,
    backgroundColor: '#073b7c',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    ...(active && {
      backgroundColor: 'deepskyblue',
    }),
  };
});
