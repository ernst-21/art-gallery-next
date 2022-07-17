import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../schemas/signInSchema';
import { FormHookType } from '../../../types/form.types';
import { signIn } from 'next-auth/react';
import { useMutation } from 'react-query';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context';

type FormData = {
    name: string;
    email: string;
    password: string;
};

const useSignInForm = (setShowError: (arg0: boolean) => void, setErrorMessage: any): FormHookType => {
    const { registerUser } = useContext(AuthContext);
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(signInSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onRegisterUser = async (data: FormData) => {
        setShowError(false);
        const {name, email, password} = data;
        const { hasError, message } = await registerUser(name, email, password);

        if (hasError) {
            setShowError(true);
            setErrorMessage(message!);
            setTimeout(() => {
                setShowError(false);
            }, 3000);
            return;
        }
        await signIn('credentials', data);
    };

    const {mutateAsync, error, isLoading, isSuccess, data} = useMutation((data: FormData) => onRegisterUser(data));

    return {
        control,
        error,
        isLoading,
        isSuccess,
        data,
        onSubmit: handleSubmit((values) => mutateAsync(values))
    };
};

export default  useSignInForm;
