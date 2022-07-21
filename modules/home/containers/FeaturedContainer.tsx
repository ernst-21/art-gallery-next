import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import ArtworksGrid from '../../artworks/components/ArtworksGrid';
import { useTranslation } from 'react-i18next';
import { IArtwork } from '../../../interfaces';
import isEmpty from 'lodash/isEmpty';

type FeatureProps = {
  featured: IArtwork[] | [];
};

const FeaturedContainer = ({ featured }: FeatureProps) => {
  const { t } = useTranslation('home');

  if (isEmpty(featured)) return null;

  return (
    <GridContainer backgroundColor={'white'} title={t('featured')}>
      <ArtworksGrid spacing={4} xs={12} sm={6} lg={3} data={featured} />
    </GridContainer>
  );
};

export default FeaturedContainer;
