import React, { memo } from 'react';
import { ErrorOutlined } from '@mui/icons-material';
import { Chip, Grid, Typography } from '@mui/material';
import FormPasswordField from '../../../../../../components/ui/FormFields/Text/FormPasswordField';
import FormTextField from '../../../../../../components/ui/FormFields/Text/FormTextField';
import { LoadingButton } from '@mui/lab';

type RegisterFieldsProps = {
  showError: boolean;
  errorMessage: string;
  control: any;
  isLoading: boolean;
  text: string;
};

const RegisterOrEditFields = ({
  showError,
  errorMessage,
  control,
  isLoading,
  text,
}: RegisterFieldsProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          {text}
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
    </>
  );
};

export default memo(RegisterOrEditFields);
