import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import ArtistGrid from '../../artists/components/ArtistGrid';
import { initialData } from '../../../database/seed-data';
import { useTranslation } from 'react-i18next';

const recommended = initialData.artists.filter((item) => item.recommended);

const RecommendedArtistContainer = () => {
  const { t } = useTranslation('home');
  return (
    <GridContainer backgroundColor={'secondary.light'} title={t('recommended')}>
      <ArtistGrid spacing={4} xs={12} sm={6} lg={3} data={recommended} />
    </GridContainer>
  );
};

export default RecommendedArtistContainer;
