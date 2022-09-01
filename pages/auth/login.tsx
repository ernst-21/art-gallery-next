import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { AuthLayoutWithImage } from '../../components/layouts';
import LoginForm from '../../modules/user/components/Authentication/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayoutWithImage title={'Signin'}>
      <LoginForm />
    </AuthLayoutWithImage>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { p = '/' } = query;

  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
