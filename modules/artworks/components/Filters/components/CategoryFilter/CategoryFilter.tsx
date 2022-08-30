import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { CATEGORIES } from '../../../../constants/categories';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { CategoryFilterItem } from '../CategoryFilterItem';
import { useTranslation } from 'next-i18next';
import { useInitialValue } from '../../../../../../hooks/utils/useInitialValue';

const CategoryFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { initialValue } = useInitialValue(artworksFilter, 'category', '');
  const [selected, setSelected] = useState(
    initialValue.length ? initialValue[0] : initialValue
  );
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

  useEffect(() => {
    if (!artworksFilter.category) {
      setSelected('');
    }
  }, [artworksFilter?.category]);

  const clearCategoryFilter = useCallback(() => {
    if (setArtworksFilter) {
      const newFilter = artworksFilter;
      delete newFilter['category'];
      setArtworksFilter({
        ...newFilter,
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
