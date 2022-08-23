import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const ImageBtn = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 70,
  marginBottom: 16,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 60,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.65,
    },
    '& .MuiImageMarked-root': {
      opacity: 1,
      display: 'block',
    },
  },
}));

export const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

export const ImageText = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

export const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

export const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  opacity: 0,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -1,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
