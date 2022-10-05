import React from 'react';
import { Button, Chip } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { NextMuiLink } from '../../../../../../components/ui/Link/NextMuiLink';
import DoneIcon from '@mui/icons-material/Done';

type ItemProps = {
  isSummary: boolean;
  isConfirmed: boolean;
  isLoading: boolean;
  onClick: () => void;
  onClickPay: () => void;
  isPaid: boolean;
};

const CartSummaryFooter = ({
  isSummary,
  isConfirmed = false,
  isPaid = false,
  onClick,
  isLoading,
  onClickPay,
}: ItemProps) => {
  return (
    <>
      {!isSummary && (
        <NextMuiLink href="/checkout/address">
          <Button sx={{ mt: 3, mb: 1.5 }} fullWidth variant="contained">
            Create Order
          </Button>
        </NextMuiLink>
      )}

      {isSummary && !isConfirmed && !isPaid && (
        <LoadingButton
          onClick={onClick}
          loading={isLoading}
          sx={{ mt: 3, mb: 1.5 }}
          fullWidth
          variant="contained"
        >
          Confirm Order
        </LoadingButton>
      )}
      {isConfirmed && !isPaid && isSummary && (
        <Button
          onClick={onClickPay}
          sx={{ mt: 3, mb: 1.5 }}
          fullWidth
          variant="contained"
        >
          Pay
        </Button>
      )}
      {isPaid && (
        <Chip
          icon={<DoneIcon />}
          sx={{ mt: 2, width: '100%' }}
          label="Paid"
          color="success"
          variant="outlined"
        />
      )}
    </>
  );
};

export default CartSummaryFooter;
