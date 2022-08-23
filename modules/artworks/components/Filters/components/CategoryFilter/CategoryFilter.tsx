import React, { useCallback } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { CATEGORIES } from '../../../../constants/categories';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { CategoryFilterItem } from '../CategoryFilterItem';

const CategoryFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();

  const filterByCategory = useCallback(
    (item: string) => {
      if (setArtworksFilter) {
        setArtworksFilter({
          ...artworksFilter,
          //@ts-ignore
          category: [item],
        });
      }
    },
    [artworksFilter, setArtworksFilter]
  );

  const clearCategoryFilter = useCallback(() => {
    const categories = CATEGORIES.map((item) => item.category);
    if (setArtworksFilter) {
      setArtworksFilter({
        ...artworksFilter,
        //@ts-ignore
        category: categories,
      });
    }
  }, [artworksFilter, setArtworksFilter]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {CATEGORIES.map((item) => (
          <CategoryFilterItem
            key={item.category}
            image={item.image}
            category={item.category}
            onClick={() => filterByCategory(item.category)}
          />
        ))}
        <Button variant={'text'} onClick={clearCategoryFilter}>
          Clear filter
        </Button>
      </Box>
      <Divider sx={{ my: 1 }} />
    </>
  );
};

export default CategoryFilter;
