import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'next-i18next';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { Box } from '@mui/material';
import { artistFiltersDefaults } from '../../../../constants/filters';

const RecommendedArtistsFilter = () => {
  const { t } = useTranslation('artists');
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      event.target.checked
        ? setArtistsFilter({
            ...artistsFilter,
            recommended: [true],
          })
        : setArtistsFilter({
            ...artistsFilter,
            recommended: [true, false],
          });
    },
    [artistsFilter, setArtistsFilter]
  );

  useEffect(() => {
    const recommendedToString = JSON.stringify(artistsFilter.recommended);
    const defaultToString = JSON.stringify(artistFiltersDefaults.recommended);
    if (recommendedToString == defaultToString) setChecked(false);
  }, [artistsFilter.recommended]);

  return (
    <Box>
      <FormControlLabel
        sx={{ ml: 0 }}
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={t('filters.recommended')}
        labelPlacement="start"
      />
    </Box>
  );
};

export default RecommendedArtistsFilter;
