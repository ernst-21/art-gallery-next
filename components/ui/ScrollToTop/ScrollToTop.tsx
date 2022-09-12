import React, { useEffect, useState, memo } from 'react';
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import { StyledFab } from '../StyledFabButton';

type ComponentProps = {
  showBelow: number;
  sx?: {};
};

const ScrollToTop = ({ showBelow, sx }: ComponentProps) => {
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
          sx={{
            right: { xs: '5%', md: '27%', lg: '22%' },
            bottom: { xs: '15vh', md: '5vh' },
            ...sx,
          }}
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
