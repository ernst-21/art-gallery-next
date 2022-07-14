import { useSession, signOut } from 'next-auth/react';
import { IUser } from '../../interfaces';

export type SecurityAuthState = {
    isLoading: boolean,
    isAuthenticated: boolean,
    user?: IUser,
    logout: () => void,
}

export const useUser = (): SecurityAuthState => {
    const { data, status } = useSession();

    return {
        isLoading: status === 'loading',
        isAuthenticated: status === 'authenticated',
        user: data?.user as IUser,
        logout: signOut
    };
};