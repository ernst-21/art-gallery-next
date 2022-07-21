import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';

const Logo = () => {
  return (
    <NextMuiLink href={'/'}>
      <Box display={'flex'}>
        <Typography sx={{ fontSize: '26px', fontWeight: 700 }}>VR</Typography>
        <Typography sx={{ fontSize: '26px' }}>TL</Typography>
      </Box>
    </NextMuiLink>
  );
};

export default Logo;
