import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import { initialData } from '../../../database/seed-data';
import ArtworksGrid from '../../artworks/components/ArtworksGrid';
import { useTranslation } from 'react-i18next';

const featured = initialData.artworks.filter((item) => item.featured);

const FeaturedContainer = () => {
  const { t } = useTranslation('home');
  return (
    <GridContainer backgroundColor={'white'} title={t('featured')}>
      <ArtworksGrid spacing={4} xs={12} sm={6} lg={3} data={featured} />
    </GridContainer>
  );
};

export default FeaturedContainer;
