import * as React from 'react';
import { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import { Typography, Slider, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';

type RangeFilterProps = {
  label: string;
  name: string;
  defaultValue: number[];
};

const RangeFilter = ({ defaultValue, label, name }: RangeFilterProps) => {
  const [value, setValue] = React.useState<number[]>(defaultValue);
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { t } = useTranslation('artworks');

  const handleChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    },
    []
  );

  const handleFilterChange = (
    event: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => {
    if (setArtworksFilter)
      setArtworksFilter({ ...artworksFilter, [name]: value as number[] });
  };

  const clearFilter = useCallback(() => {
    setValue(defaultValue);
    if (setArtworksFilter)
      setArtworksFilter({ ...artworksFilter, [name]: defaultValue });
  }, [artworksFilter, setArtworksFilter, defaultValue, name]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Typography mr={1}>{t(label)}</Typography>
        <Typography sx={{ fontSize: '14px' }} mr={2}>
          {value[0]} - {value[1]}
        </Typography>
        <Box onClick={clearFilter} sx={{ cursor: 'pointer' }}>
          <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
            {t('filters.all')}
          </Typography>
        </Box>
      </Box>

      <Slider
        min={defaultValue[0]}
        max={defaultValue[1]}
        getAriaLabel={() => label}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleFilterChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default memo(RangeFilter);
