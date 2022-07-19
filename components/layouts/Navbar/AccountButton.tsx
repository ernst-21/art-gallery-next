import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';
import { useUser } from '../../../hooks/security/useUser';

const AccountButton = () => {
  const { isAuthenticated, logout, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      {!isAuthenticated ? (
        <Box display={'flex'}>
          <NextMuiLink href={`/auth/login?p=${router.asPath}`}>
            <Button sx={{ mr: 1 }} color={'primary'} variant={'contained'}>
              Login
            </Button>
          </NextMuiLink>
          <NextMuiLink href={`/auth/register?p=${router.asPath}`}>
            <Button sx={{ mr: 1 }} color={'primary'} variant={'outlined'}>
              Register
            </Button>
          </NextMuiLink>
        </Box>
      ) : (
        <Button color={'primary'} variant={'outlined'} onClick={logout}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default AccountButton;
