import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import useRegisterForm from '../../../../hooks/useRegisterForm';
import SpinLoader from '../../../../../../components/ui/Spinloader';
import { RegisterOrEditFields } from '../RegisterOrEditFields';

const RegisterForm = () => {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { onSubmit, control, isLoading, error, isSuccess, data } =
    useRegisterForm(setShowError, setErrorMessage);

  const destination = useMemo(() => {
    return router.query.p?.toString() || '/';
  }, [router]);

  if (data || isSuccess) {
    return (
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems="center"
        sx={{ width: { xs: '100%', md: '60%' }, height: '100vh' }}
      >
        <Typography>
          <SpinLoader />
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems="center"
      sx={{ width: { xs: '100%', md: '60%' }, height: '100vh' }}
    >
      <Box sx={{ width: { xs: '80%', md: 500 }, padding: '20px' }}>
        <form onSubmit={onSubmit} noValidate>
          <Grid container spacing={3}>
            <RegisterOrEditFields
              showError={showError}
              errorMessage={errorMessage}
              control={control}
              isLoading={isLoading}
              text={'Sign Up'}
            />
            <Grid item xs={12} display="flex" justifyContent={'end'}>
              <NextLink href={`/auth/login?p=${destination}`} passHref>
                <Link underline="always">Already have an account?</Link>
              </NextLink>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
