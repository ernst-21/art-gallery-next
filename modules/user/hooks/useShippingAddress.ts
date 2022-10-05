import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCart } from '../../../context/cart';
import { shippingSchema } from '../schemas/shippingSchema';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
};

const useShippingAddress = () => {
  const { updateAddress, shippingAddress } = useCart();
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shippingSchema),
    defaultValues: {
      firstName: shippingAddress?.firstName || '',
      lastName: shippingAddress?.lastName || '',
      address: shippingAddress?.address || '',
      address2: shippingAddress?.address2 || '',
      zip: shippingAddress?.zip || '',
      city: shippingAddress?.city || '',
      country: shippingAddress?.country || '',
      phone: shippingAddress?.phone || '',
    },
  });

  const onShipAddress = (data: FormData) => {
    updateAddress(data);
    if (isEmpty(errors)) {
      push('/order/summary');
    }
  };

  return {
    control,
    errors,
    onSubmit: handleSubmit((values) => onShipAddress(values)),
  };
};

export default useShippingAddress;
