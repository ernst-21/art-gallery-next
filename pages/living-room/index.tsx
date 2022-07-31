import type { NextPage } from 'next';
import React from 'react';
import { LivingRoomContainer } from '../../modules/artworks/containers';
import RightDrawerLayout from '../../components/layouts/RightDrawerLayout';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useToggle from '../../hooks/utils/useToggle';
import ArtworksAccordion from '../../modules/artworks/components/LivingRoom/components/ArtworksAccordion/ArtworksAccordion';

const LivingRoomPage: NextPage = () => {
  const { onOpen, isOpen, onClose } = useToggle();

  return (
    <RightDrawerLayout
      onClose={onClose}
      open={isOpen}
      rightDrawerChildren={<ArtworksAccordion />}
    >
      <LivingRoomContainer onOpen={onOpen} />
    </RightDrawerLayout>
  );
};

export default LivingRoomPage;

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['home', 'common', 'artworks'])),
    },
  };
};
