import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'next-i18next';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { Box } from '@mui/material';

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
    if (!artistsFilter.recommended) setChecked(false);
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
