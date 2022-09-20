import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import { FavoriteArtworksProvider } from '../../../context/artworks/FavoriteArtworksContext/FavoriteArtworksContext';
import { getUserFavoriteArtists } from '../../../database/dbArtists';
import { getUserFavoriteArtworks } from '../../../database/dbArtworks';
import { UserProfileContainer } from '../../../modules/user/containers';

const ProfilePage: NextPage = (props) => {
  //@ts-ignore
  const { user, artworks, artists } = props;

  return (
    <FavoriteArtworksProvider>
      <MainLayout title={`${user?.name} - Profile`}>
        <UserProfileContainer
          artworks={artworks}
          artists={artists}
          user={user}
        />
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

  const artworks = await getUserFavoriteArtworks(user?._id);
  const artists = await getUserFavoriteArtists(user?._id);

  return {
    props: {
      user,
      artworks,
      artists,
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
