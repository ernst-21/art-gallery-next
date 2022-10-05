//@ts-nocheck
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { countries } from '../../../../../../utils';
import FormTextField from '../../../../../../components/ui/FormFields/Text/FormTextField';
import SelectForm from '../../../../../../components/ui/FormFields/Text/FormSelect';
import useShippingAddress from '../../../../hooks/useShippingAddress';

//import { AlertMessage } from '../../../../../../components/ui/Alert';

const ShippingAddressForm = () => {
  const { control, onSubmit } = useShippingAddress();

  return (
    <>
      {/* <AlertMessage
        text={'Order created'}
        verticalPosition={'top'}
        horizontalPosition={'center'}
        condition={isEmpty(errors)}
      /> */}
      <Box sx={{ my: 4, minHeight: '700px' }}>
        <form onSubmit={onSubmit}>
          <Typography variant="h1" component="h1">
            Address
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <FormTextField
                variant={'filled'}
                name="firstName"
                label={'Name'}
                control={control}
                disabled={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormTextField
                variant={'filled'}
                name="lastName"
                label={'Last Name'}
                control={control}
                disabled={false}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormTextField
                variant={'filled'}
                name="address"
                label={'Address'}
                control={control}
                disabled={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormTextField
                variant={'filled'}
                name="address2"
                label={'Address 2 (optional)'}
                control={control}
                disabled={false}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormTextField
                type={'number'}
                variant={'filled'}
                name="zip"
                label={'Post code'}
                control={control}
                disabled={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormTextField
                variant={'filled'}
                name="city"
                label={'City'}
                control={control}
                disabled={false}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectForm
                controller={Controller}
                options={countries}
                label={'Country'}
                name={'country'}
                control={control}
                itemLabel={'name'}
                itemValue={'code'}
                variant="filled"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormTextField
                type={'number'}
                variant={'filled'}
                name="phone"
                label={'Phone'}
                control={control}
                disabled={false}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
            <Button
              type="submit"
              color="primary"
              className="circular-btn"
              size="large"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default ShippingAddressForm;
