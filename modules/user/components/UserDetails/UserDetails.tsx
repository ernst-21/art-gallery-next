import React from 'react';
import { Box } from '@mui/material';
import { UserProps } from '../../../../types/common.types';
import UserInfo from './components/UserInfo';

const UserDetails = ({ user }: UserProps) => {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{ height: '240px', width: '100%', backgroundColor: 'darkgray' }}
      />
      <UserInfo user={user} />
    </Box>
  );
};

export default UserDetails;
