import React, { useEffect, useState, memo } from 'react';
import Fab from '@mui/material/Fab';
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import { styled } from '@mui/material/styles';

type ComponentProps = {
  showBelow: number;
};

const StyledFab = styled(Fab)(({ theme }) => ({
  zIndex: 2,
  position: 'fixed',
  bottom: '10vh',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  '&:hover, &.Mui-focusVisible': {
    transition: '0.3s',
    color: '#397BA6',
    backgroundColor: '#DCDCDC',
  },
}));

const ScrollToTop = ({ showBelow }: ComponentProps) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      setShow(true);
    }
    if (window.pageYOffset < showBelow) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    //eslint-disable-next-line
  }, [showBelow]);

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {show && (
        <StyledFab
          sx={{ right: { xs: '5%', md: '27%', lg: '22%' } }}
          onClick={handleClick}
          color="primary"
          aria-label="add"
        >
          <ExpandLessOutlined />
        </StyledFab>
      )}
    </div>
  );
};

export default memo(ScrollToTop);
