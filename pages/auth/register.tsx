import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { AuthLayoutWithImage } from '../../components/layouts';
import { RegisterForm } from '../../modules/user/components/Authentication/components/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthLayoutWithImage isRegisterView title={'Signup'}>
      <RegisterForm />
    </AuthLayoutWithImage>
  );
};

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

export default RegisterPage;
