import React from 'react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../components/layouts/MainLayout';
import { OrdersTableContainer } from '../../modules/user/containers/OrdersTableContainer';
import PageWidthContainer from '../../components/layouts/PageWidthContainer';

const OrdersTablePage: NextPage = () => {
  return (
    <MainLayout title={'Orders'}>
      <PageWidthContainer>
        <OrdersTableContainer />
      </PageWidthContainer>
    </MainLayout>
  );
};

export default OrdersTablePage;

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
