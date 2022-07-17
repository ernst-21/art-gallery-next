import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas/login.schema';
import { FormHookType } from '@dfl/mui-react-common';

import useLoginState from '@/modules/authentication/hooks/useLoginState';



const useLoginForm = (): FormHookType => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      identifier: '',
      password: '',
      remember: false
    }
  });

  // const { mutateAsync, error, isLoading } = useSignIn();
  const { login, isLoading, error } = useLoginState();

  return {
    control,
    error,
    isLoading,
    onSubmit: handleSubmit((data) => login(data))
  };
};

export default useLoginForm;
