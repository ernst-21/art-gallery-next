import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import { initialData } from '../../../database/seed-data';
import ArtworksGrid from '../../artworks/components/ArtworksGrid';

const featured = initialData.artworks.filter((item) => item.featured);

const FeaturedContainer = () => {
  return (
    <GridContainer backgroundColor={'white'} title={'Featured Artworks'}>
      <ArtworksGrid spacing={4} xs={12} sm={6} md={3} data={featured} />
    </GridContainer>
  );
};

export default FeaturedContainer;
