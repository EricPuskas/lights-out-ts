/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container Title
 */
export const ContainerTitle = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -60,
    '@media (max-width: 768px)': {
      marginTop: 70,
    },
    '@media (max-width: 391px)': {
      marginTop: 40,
      marginBottom: 10,
    },
  };
});
