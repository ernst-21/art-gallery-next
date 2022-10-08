import React from 'react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../../components/layouts/MainLayout';
import { CartContainer } from '../../modules/user/containers/CartContainer';
import { ScrollToTop } from '../../components/ui/ScrollToTop';
import { useCart } from '../../context/cart';

const CartPage: NextPage = () => {
  const { cart } = useCart();
  return (
    <MainLayout title={'Cart'}>
      <CartContainer cart={cart} />
      <ScrollToTop
        showBelow={250}
        sx={{
          right: { xs: '5%' },
        }}
      />
    </MainLayout>
  );
};

export default CartPage;

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['cart', 'common'])),
    },
  };
};
