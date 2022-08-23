import { memo } from 'react';
import ArtworkCard from '../../../modules/artworks/components/ArtworkCard';
import ArtistCard from '../../../modules/artists/components/ArtistCard';
import { IArtist, IArtwork } from '../../../interfaces';
import { Box } from '@mui/material';
//import Masonry from 'react-masonry-css';
import { Masonry } from '@mui/lab';

type ResultsGridProp = {
  isArtwork?: boolean;
  data: IArtwork[] | IArtist[];
};

const ResultsGrid = ({ data, isArtwork }: ResultsGridProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} spacing={3}>
        {data.map((item: IArtist | IArtwork) =>
          isArtwork === true ? (
            // @ts-ignore
            <ArtworkCard key={item._id} artwork={item} />
          ) : (
            // @ts-ignore
            <ArtistCard key={item?._id} {...(item as IArtist)} />
          )
        )}
      </Masonry>
    </Box>
  );
};

export default memo(ResultsGrid);
