import React from 'react';
import { Box } from '@mui/material';
import { socialIcons } from './socialIcons';

const FooterIcons = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {socialIcons.map((item: any, index: number) => {
        const Icon = item.icon;
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: '#535C67',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: 99,
              mr: 1,
            }}
          >
            <Icon
              style={{
                fontSize: '18px',
                color: '#fff',
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default FooterIcons;
