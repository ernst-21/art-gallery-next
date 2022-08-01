import { Box, Typography } from '@mui/material';
import React from 'react';

type NoSelectedProps = {
  t: any;
};

const NoSelected = ({ t }: NoSelectedProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '80%',
        width: '40%',
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'lightgray',
        border: '2px solid lightgray',
        boxShadow: '-3px 5px 15px -6px #000000',
      }}
    >
      <Typography sx={{ fontSize: { xs: 16, md: 24 }, textAlign: 'center' }}>
        {t}
      </Typography>
    </Box>
  );
};

export default NoSelected;
