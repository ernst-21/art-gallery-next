import React from 'react';
import { Button, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { NextMuiLink } from '../../../../../../components/ui/Link/NextMuiLink';
import DoneIcon from '@mui/icons-material/Done';

type ItemProps = {
  isSummary: boolean;
  onClickPay: () => void;
  isPaid: boolean;
};

const CartSummaryFooter = ({
  isSummary,
  isPaid = false,
  onClickPay,
}: ItemProps) => {
  return (
    <>
      {!isSummary && (
        <NextMuiLink href="/checkout/address">
          <Button sx={{ mt: 3, mb: 1.5 }} fullWidth variant="contained">
            Checkout
          </Button>
        </NextMuiLink>
      )}
      {!isPaid && isSummary && (
        <LoadingButton
          onClick={onClickPay}
          sx={{ mt: 3, mb: 1.5 }}
          fullWidth
          variant="contained"
        >
          Pay
        </LoadingButton>
      )}
    </>
  );
};

export default CartSummaryFooter;
