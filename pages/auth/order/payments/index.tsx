import React from 'react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../../../components/layouts/MainLayout';
import { PaymentsTableContainer } from '../../../../modules/user/containers/PaymentsTableContainer';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';

const PaymentsTablePage: NextPage = () => {
  return (
    <MainLayout title={'Orders'}>
      <PageWidthContainer>
        <PaymentsTableContainer />
      </PageWidthContainer>
    </MainLayout>
  );
};

export default PaymentsTablePage;

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
