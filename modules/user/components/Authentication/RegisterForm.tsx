import React, { useMemo, useState } from 'react';
import { Box, Chip, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ErrorOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import useRegisterForm from '../../hooks/useRegisterForm';
import FormTextField from '../../../../components/ui/FormFields/Text/FormTextField';
import FormPasswordField from '../../../../components/ui/FormFields/Text/FormPasswordField';
import { LoadingButton } from '../../../../components/ui/Buttons';

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
        <Typography>Redirecting...</Typography>
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Sign up
              </Typography>
              <Chip
                className="fadeIn"
                sx={{
                  display: showError ? 'flex' : 'none',
                  justifyContent: 'flex-start',
                }}
                label={errorMessage}
                color="error"
                icon={<ErrorOutlined />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                variant={'filled'}
                name="name"
                label={'Name'}
                control={control}
                disabled={isLoading}
              />
            </Grid>

            <Grid item xs={12}>
              <FormTextField
                variant={'filled'}
                name="email"
                label={'Email'}
                control={control}
                disabled={isLoading}
              />
            </Grid>

            <Grid item xs={12}>
              <FormPasswordField
                variant={'filled'}
                name="password"
                label={'Password'}
                control={control}
                disabled={false}
              />
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                fullWidth
                sx={{ height: '48px' }}
                type="submit"
                color="primary"
                variant="contained"
                size={'large'}
                loading={isLoading}
              >
                Submit
              </LoadingButton>
            </Grid>
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
