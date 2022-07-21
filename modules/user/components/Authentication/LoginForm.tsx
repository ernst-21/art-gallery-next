import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { ErrorOutlined } from '@mui/icons-material';
import NextLink from 'next/link';
import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import FormPasswordField from '../../../../components/ui/FormFields/Text/FormPasswordField';
import useSignInForm from '../../hooks/useLoginForm';
import FormTextField from '../../../../components/ui/FormFields/Text/FormTextField';
import { GoogleButton, LoadingButton } from '../../../../components/ui/Buttons';

const LoginForm = () => {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const { onSubmit, control, isLoading, error, isSuccess, data } =
    useSignInForm(setShowError);

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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Sign in
              </Typography>
              <Chip
                className="fadeIn"
                sx={{
                  display: showError ? 'flex' : 'none',
                  justifyContent: 'flex-start',
                }}
                label="Bad credentials"
                color="error"
                icon={<ErrorOutlined />}
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

            <Grid marginTop={2} item xs={12}>
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
            <Grid item xs={12} display="flex" justifyContent={'flex-end'}>
              <NextLink href={`/auth/register?p=${destination}`} passHref>
                <Link underline="always">Don&apos;t have an account yet?</Link>
              </NextLink>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent={'end'}
            >
              <Divider sx={{ mb: 3, width: '100%' }} />
              <GoogleButton
                key={'google'}
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ mb: 1, height: '48px' }}
                onClick={() => signIn('google')}
              >
                Google
              </GoogleButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
