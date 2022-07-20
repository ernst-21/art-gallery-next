import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import PageWidthContainer from '../../layouts/PageWidthContainer';

type GridContainerProps = {
  backgroundColor: string;
  title: string;
  children: ReactNode;
};

const GridContainer = ({
  backgroundColor,
  title,
  children,
}: GridContainerProps) => {
  return (
    <Box sx={{ backgroundColor }}>
      <PageWidthContainer>
        <Box
          display="flex"
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
