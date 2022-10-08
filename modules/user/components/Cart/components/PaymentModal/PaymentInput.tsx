import React, { Dispatch, memo, SetStateAction, useEffect } from 'react';
import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { ERROR_MESSAGES } from './payment-options';

type ItemProps = {
  control: any;
  setMetaError: Dispatch<SetStateAction<boolean>>;
};

const PaymentInputs = ({ control, setMetaError }: ItemProps) => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
  } = usePaymentInputs({ errorMessages: ERROR_MESSAGES });

  useEffect(() => {
    if (meta.error) {
      setMetaError(true);
    } else {
      setMetaError(false);
    }
  }, [meta.error, setMetaError]);

  return (
    <Box sx={{ mt: 1 }}>
      <Controller
        name="credit"
        control={control}
        render={({ field }: any) => (
          <PaymentInputsWrapper {...field} {...wrapperProps} focused>
            {/* @ts-ignore */}
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
        )}
      />
    </Box>
  );
};
export default memo(PaymentInputs);
