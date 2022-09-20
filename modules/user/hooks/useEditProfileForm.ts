import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormHookType } from '../../../types/form.types';
import { signOut } from 'next-auth/react';
import { useMutation } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import { useUser } from '../../../hooks/security/useUser';
import { editSchema } from '../schemas/userEditSchema';
import { useRouter } from 'next/router';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const useEditProfileForm = (
  setShowError: (arg0: boolean) => void,
  setErrorMessage: any
): FormHookType => {
  const { editUser } = useContext(AuthContext);
  const { user } = useUser();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(editSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      password: '',
    },
  });

  const onEditUser = async (data: FormData) => {
    setShowError(false);
    const { name, email, password } = data;
    const { hasError, message } = await editUser(name, email, password);

    if (hasError) {
      setShowError(true);
      setErrorMessage(message!);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    if (!hasError) {
      await signOut();
    }
  };

  const { mutateAsync, error, isLoading, isSuccess, data } = useMutation(
    (data: FormData) => onEditUser(data)
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    onSubmit: handleSubmit((values) => {
      mutateAsync(values as FormData);
    }),
  };
};

export default useEditProfileForm;
