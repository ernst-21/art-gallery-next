import * as React from 'react';
import { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import { Typography, Slider, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';

const PriceFilter = () => {
  const [value, setValue] = React.useState<number[]>([0, 10000]);
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { t } = useTranslation('artworks');

  const handleChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    },
    []
  );

  const handlePriceChange = (
    event: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => {
    if (setArtworksFilter)
      setArtworksFilter({ ...artworksFilter, price: value as number[] });
  };

  const clearPriceFilter = useCallback(() => {
    setValue([0, 10000]);
    if (setArtworksFilter)
      setArtworksFilter({ ...artworksFilter, price: [0, 10000] });
  }, [artworksFilter, setArtworksFilter]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Typography mr={1}>{t('filters.price')}</Typography>
        <Typography sx={{ fontSize: '14px' }} mr={2}>
          ${value[0]} - ${value[1]}
        </Typography>
        <Box onClick={clearPriceFilter} sx={{ cursor: 'pointer' }}>
          <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
            {t('filters.all')}
          </Typography>
        </Box>
      </Box>

      <Slider
        min={0}
        max={10000}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handlePriceChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default memo(PriceFilter);
