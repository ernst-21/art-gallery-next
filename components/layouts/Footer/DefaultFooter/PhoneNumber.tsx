import React from 'react';
import { Box, Typography } from '@mui/material';
import { PHONE_NUMBER } from '../../../../modules/home/constants/home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const PhoneNumber = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <LocalPhoneIcon sx={{ color: 'white', fontSize: '18px', mr: 1 }} />
      <Typography sx={{ fontSize: '15px' }}>{PHONE_NUMBER}</Typography>
    </Box>
  );
};

export default PhoneNumber;
