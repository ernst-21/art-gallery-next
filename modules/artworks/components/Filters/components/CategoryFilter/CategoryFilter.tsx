import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { CATEGORIES } from '../../../../constants/categories';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { CategoryFilterItem } from '../CategoryFilterItem';
import { useTranslation } from 'next-i18next';

const CategoryFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const [selected, setSelected] = useState('');
  const { t } = useTranslation('artworks');

  const filterByCategory = useCallback(
    (item: string) => {
      setSelected(item);
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
    setSelected('');
  }, [artworksFilter, setArtworksFilter]);

  const hasSelected = useMemo(() => {
    return selected.length > 0;
  }, [selected.length]);

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
            isSelected={selected === item.category}
            key={item.category}
            image={item.image}
            category={item.category}
            onClick={() => filterByCategory(item.category)}
          />
        ))}
        {hasSelected && (
          <Button variant={'outlined'} onClick={clearCategoryFilter}>
            {t('filters.clearCategories')}
          </Button>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default CategoryFilter;
