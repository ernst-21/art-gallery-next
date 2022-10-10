import React from 'react';
import type {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../../../components/layouts/MainLayout';
import { PaymentsTableContainer } from '../../../../modules/user/containers/PaymentsTableContainer';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';

const PaymentsTablePage: NextPage = () => {
  return (
    <MainLayout title={'Payments'}>
      <PageWidthContainer>
        <PaymentsTableContainer />
      </PageWidthContainer>
    </MainLayout>
  );
};

export default PaymentsTablePage;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
