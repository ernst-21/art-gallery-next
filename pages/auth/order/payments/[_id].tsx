import React from 'react';
import type { GetServerSidePropsContext, GetStaticPaths, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../../../components/layouts/MainLayout';
import { ScrollToTop } from '../../../../components/ui/ScrollToTop';
import { dbPayments } from '../../../../database';
import { getSession } from 'next-auth/react';
import { IPayment } from '../../../../interfaces';
import { PaymentSummaryContainer } from '../../../../modules/user/containers/PaymentSummaryContainer';

const PaymentSummary: NextPage = (props) => {
  const { payment } = props as { payment: IPayment };

  return (
    <MainLayout title={'Order-Summary'}>
      <PaymentSummaryContainer payment={payment} />
      <ScrollToTop
        showBelow={250}
        sx={{
          right: { xs: '5%' },
        }}
      />
    </MainLayout>
  );
};

export default PaymentSummary;

export const getServerSideProps = async ({
  locale,
  params,
  req,
}: GetServerSidePropsContext) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { _id = '' } = params as { _id: string };
  const payment = await dbPayments.getPaymentById(_id);

  if (!payment) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      payment,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'payment'])),
    },
  };
};
