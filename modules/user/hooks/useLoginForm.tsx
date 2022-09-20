import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../schemas/signInSchema';
import { FormHookType } from '../../../types/form.types';
import { signIn } from 'next-auth/react';
import { useMutation } from 'react-query';

type FormData = {
  email: string;
  password: string;
};

const useSignInForm = (cb: (arg0: boolean) => void): FormHookType => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginUser = async (data: FormData) => {
    cb(false);
    console.log('dataFrom Login', data);
    await signIn('credentials', data);
  };

  const { mutateAsync, error, isLoading, isSuccess, data } = useMutation(
    (data: FormData) => onLoginUser(data)
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    onSubmit: handleSubmit((values) => mutateAsync(values)),
  };
};

export default useSignInForm;
