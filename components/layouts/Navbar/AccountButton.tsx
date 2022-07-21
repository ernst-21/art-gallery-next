import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';
import { useUser } from '../../../hooks/security/useUser';
import NavAvatar from '../../ui/Avatar/NavAvatar';

const AccountButton = () => {
  const { isAuthenticated, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      {!isAuthenticated ? (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
        <NavAvatar />
      )}
    </Box>
  );
};

export default AccountButton;
