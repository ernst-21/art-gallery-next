import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import PageWidthContainer from '../../layouts/PageWidthContainer';

type GridContainerProps = {
  backgroundColor: string;
  title: string;
  children: ReactNode;
  sx?: {};
};

const GridContainer = ({
  backgroundColor,
  title,
  children,
  sx,
}: GridContainerProps) => {
  return (
    <Box sx={{ backgroundColor, ...sx }}>
      <PageWidthContainer>
        <Box
          display="flex"
          justifyContent={'center'}
          flexDirection="column"
          alignItems={'center'}
          sx={{ paddingY: 6 }}
        >
          <Typography sx={{ mb: 4, textAlign: 'center' }} variant="h1">
            {title}
          </Typography>
          {children}
        </Box>
      </PageWidthContainer>
    </Box>
  );
};

export default GridContainer;
