import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import { FavoriteArtworksProvider } from '../../../context/artworks/FavoriteArtworksContext/FavoriteArtworksContext';
import { UserProfileContainer } from '../../../modules/user/containers';

const ProfilePage: NextPage = (props) => {
  //@ts-ignore
  const { user } = props;

  return (
    <FavoriteArtworksProvider>
      <MainLayout title={`${user?.name} - Profile`}>
        <UserProfileContainer user={user} />
      </MainLayout>
    </FavoriteArtworksProvider>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale,
}) => {
  const session: any = await getSession({ req });
  const user = session.user;

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
      //@ts-ignore
      ...(await serverSideTranslations(locale, [
        'common',
        'profile',
        'artists',
        'artworks',
      ])),
    },
  };
};
