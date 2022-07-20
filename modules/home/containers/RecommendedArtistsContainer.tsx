import React from 'react';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import ArtistGrid from '../../artists/components/ArtistGrid';
import { initialData } from '../../../database/seed-data';

const recommended = initialData.artists.filter((item) => item.recommended);

const RecommendedArtistContainer = () => {
    return (
        <GridContainer backgroundColor={'secondary.light'} title={'Recommended Artists'}>
            <ArtistGrid spacing={4} xs={12} sm={6} md={3} data={recommended} />
        </GridContainer>
    );
};

export default RecommendedArtistContainer;
