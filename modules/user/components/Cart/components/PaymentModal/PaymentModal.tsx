import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Typography from '@mui/material/Typography';
import { ModalComponent } from '../../../../../../components/ui/ModalComponent';
import { Box, Chip, Stack } from '@mui/material';
import { format } from '../../../../../../utils';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createPaymentFromSummary } from '../../../../services/user-api';
import { IArtwork, ShippingAddress } from '../../../../../../interfaces';
import { useUser } from '../../../../../../hooks/security/useUser';
import { LoadingButton } from '@mui/lab';
import PaymentInputs from './PaymentInput';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

type PaymentModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIsPaid: Dispatch<SetStateAction<boolean>>;
  cart: IArtwork[];
  total: number;
  shippingAddress: ShippingAddress;
  numberOfItems: number;
  clearCart: () => void;
};

const PaymentModal = ({
  isOpen,
  onClose,
  onOpen,
  setIsPaid,
  cart,
  total,
  numberOfItems,
  shippingAddress,
  clearCart,
}: PaymentModalProps) => {
  const { user } = useUser();
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation('payment');
  const [metaError, setMetaError] = useState(false);

  const {
    mutate: createPaymentMutation,
    isLoading,
    isError,
  } = useMutation(
    'payment',
    (payment: any) => {
      return createPaymentFromSummary(payment);
    },
    {
      onSuccess: () => {
        setIsPaid(true);
        onClose();
        clearCart();
      },
    }
  );

  const paymentItems = useMemo(() => {
    return cart.map((item: IArtwork) => {
      return {
        _id: item._id!,
        name: item.name!,
        artist: item.artist!,
        description: item.description!,
        slug: item.slug!,
        category: item.category!,
        url: item.url!,
        price: item.price!,
        size: item.size!,
      };
    });
  }, [cart]);

  const handleCreatePayment = useCallback(async () => {
    const payment = {
      numberOfItems,
      user: user?._id!,
      shippingAddress: shippingAddress!,
      total,
      paymentItems,
    };
    //@ts-ignore
    createPaymentMutation(payment);
  }, [
    createPaymentMutation,
    numberOfItems,
    paymentItems,
    shippingAddress,
    total,
    user?._id,
  ]);

  const onSubmit = (data: any) => {
    if (!metaError) {
      handleCreatePayment();
    } else {
      return;
    }
  };

  return (
    <div>
      <ModalComponent open={isOpen} handleOpen={onOpen} handleClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ textAlign: 'center' }}>
            {isError && (
              <Chip
                sx={{ backgroundColor: 'red', color: 'white' }}
                label={'Something went wrong'}
              />
            )}
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>
              VRTL
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>
              Total: {format(total)}
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 1 }}>Note:</Typography>
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: 'text.secondary', my: 1 }}>
                {t('explainText')}
              </Typography>
            </Box>

            <PaymentInputs control={control} setMetaError={setMetaError} />
            <LoadingButton
              loading={isLoading}
              sx={{ mt: 3 }}
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Complete payment
            </LoadingButton>
          </Stack>
        </form>
      </ModalComponent>
    </div>
  );
};

export default memo(PaymentModal);
