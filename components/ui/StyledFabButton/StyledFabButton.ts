import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';

export const StyledFab = styled(Fab)(({ theme }) => ({
  zIndex: 2,
  position: 'fixed',
  color: theme.palette.primary.main,
  backgroundColor: '#DCDCDC',
  '&:hover, &.Mui-focusVisible': {
    transition: '0.3s',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
  },
}));
