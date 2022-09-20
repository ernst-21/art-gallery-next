import React, { useReducer, ReactNode, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '../../interfaces';
import { ApiClient } from '../../api';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useSession, signOut } from 'next-auth/react';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

type ProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: '[Auth] - Login', payload: data.user as IUser });
    }
  }, [data, status]);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await ApiClient.post('/user/login', { email, password });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await ApiClient.post('/user/register', {
        name,
        email,
        password,
      });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          // @ts-ignore
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: 'Something went wrong by registering the user',
      };
    }
  };

  const logout = async () => {
    await signOut();
  };

  const editUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await ApiClient.post('/user/edit', {
        name,
        email,
        password,
      });
      const { user } = data;
      dispatch({ type: '[Auth] - Logout', payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          // @ts-ignore
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: 'Something went wrong by registering the user',
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        editUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
