import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import ArtistGrid from '../../artists/components/ArtistGrid';
import { useTranslation } from 'react-i18next';
import { IArtist } from '../../../interfaces';
import isEmpty from 'lodash/isEmpty';

type RecommendedProps = {
  recommended: IArtist[];
};

const RecommendedArtistContainer = ({ recommended }: RecommendedProps) => {
  const { t } = useTranslation('home');

  if (isEmpty(recommended)) return null;

  return (
    <GridContainer backgroundColor={'secondary.light'} title={t('recommended')}>
      <ArtistGrid spacing={4} xs={12} sm={6} lg={3} data={recommended} />
    </GridContainer>
  );
};

export default RecommendedArtistContainer;
