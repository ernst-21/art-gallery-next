import React, { memo } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';

type LogoProps = {
  sx?: {};
  secondSx?: {};
};

const Logo = ({ sx, secondSx }: LogoProps) => {
  return (
    <NextMuiLink href={'/'}>
      <Box display={'flex'}>
        <Typography sx={{ fontSize: '26px', fontWeight: 700, ...sx }}>
          VR
        </Typography>
        <Typography sx={{ fontSize: '26px', ...secondSx }}>TL</Typography>
      </Box>
    </NextMuiLink>
  );
};

export default memo(Logo);
