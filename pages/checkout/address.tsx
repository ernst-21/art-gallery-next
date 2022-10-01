import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Typography } from '@mui/material';
import MainLayout from '../../components/layouts/MainLayout';
import PageWidthContainer from '../../components/layouts/PageWidthContainer';
import { ShippingAddressForm } from '../../modules/user/components/ShippingAddress/components/ShippingAddressForm';

const AddressPage: NextPage = () => {
  return (
    <MainLayout title="Address">
      <PageWidthContainer>
        <ShippingAddressForm />
      </PageWidthContainer>
    </MainLayout>
  );
};

export default AddressPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
