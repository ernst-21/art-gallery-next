import React, { memo } from 'react';
import { Stack } from '@mui/material';
import { MobileFilterButton } from '../MobileFilterButton';
import { ScrollToTop } from '../ScrollToTop';

type ComponentProps = {
  showBelow: number;
  onClick: () => void;
};

const FloatingButtons = ({ showBelow, onClick }: ComponentProps) => {
  return (
    <Stack>
      <MobileFilterButton onClick={onClick} />
      <ScrollToTop showBelow={showBelow} />
    </Stack>
  );
};

export default memo(FloatingButtons);
