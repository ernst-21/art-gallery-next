import React, { ReactNode, memo } from 'react';
import { Box } from '@mui/material';

type EmptyContainerProps = {
  children: ReactNode;
  sx?: {};
};

const EmptyContainer = ({ children, sx }: EmptyContainerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.light',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default memo(EmptyContainer);
