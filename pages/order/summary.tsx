import React from 'react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../components/layouts/MainLayout';
import { ScrollToTop } from '../../components/ui/ScrollToTop';
import { OrderSummaryContainer } from '../../modules/user/containers/OrderSummaryContainer';

const OrderSummary: NextPage = () => {
  return (
    <MainLayout title={'Order-Summary'}>
      <OrderSummaryContainer />
      <ScrollToTop
        showBelow={250}
        sx={{
          right: { xs: '5%' },
        }}
      />
    </MainLayout>
  );
};

export default OrderSummary;

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
