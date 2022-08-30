import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'next-i18next';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { Box } from '@mui/material';
import { useInitialValue } from '../../../../../../hooks/utils/useInitialValue';

const RecommendedArtistsFilter = () => {
  const { t } = useTranslation('artists');
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (artistsFilter.recommended && artistsFilter.recommended.length === 1) {
      setChecked(true);
    }
  }, [artistsFilter.recommended]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFilter = artistsFilter;
      delete newFilter['recommended'];
      setChecked(event.target.checked);
      event.target.checked
        ? setArtistsFilter({
            ...artistsFilter,
            recommended: [true],
          })
        : setArtistsFilter({
            ...newFilter,
          });
    },
    [artistsFilter, setArtistsFilter]
  );

  useEffect(() => {
    if (!artistsFilter.recommended) setChecked(false);
  }, [artistsFilter.recommended]);

  return (
    <Box>
      <FormControlLabel
        value={checked}
        sx={{ ml: 0 }}
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={t('filters.recommended')}
        labelPlacement="start"
      />
    </Box>
  );
};

export default RecommendedArtistsFilter;
