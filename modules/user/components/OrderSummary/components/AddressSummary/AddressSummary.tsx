import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useCart } from '../../../../../../context/cart';
import { ShippingAddress } from '../../../../../../interfaces';
import { countries, stringWrangler } from '../../../../../../utils';

type AddressInfoProps = {
  info: string;
  label: string;
};

export const AddressInfo = ({ info, label }: AddressInfoProps) => {
  return info.length > 0 ? (
    <Box mt={1} display={'flex'} justifyContent={'space-between'}>
      <Typography sx={{ fontWeight: 500 }}>
        {stringWrangler.capitalizeString(label)}:{' '}
      </Typography>
      <Typography>{info}</Typography>
    </Box>
  ) : (
    <></>
  );
};

type AddressSummaryProps = {
  shippingAddress: ShippingAddress;
};

const AddressSummary = ({ shippingAddress }: AddressSummaryProps) => {
  const findCountryOrField = useCallback(
    (key: string) => {
      if (key === 'country') {
        const country = countries.find(
          //@ts-ignore
          (country) => country.code === shippingAddress[key]
        );
        return country?.name;
      } else {
        //@ts-ignore
        return shippingAddress[key];
      }
    },
    [shippingAddress]
  );

  if (!shippingAddress) return null;

  return (
    <>
      <Stack sx={{ mb: 1.5 }} spacing={1.5}>
        {Object.keys(shippingAddress).map((key: string) => (
          //@ts-ignore
          <AddressInfo key={key} info={findCountryOrField(key)} label={key} />
        ))}
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </>
  );
};

export default AddressSummary;
