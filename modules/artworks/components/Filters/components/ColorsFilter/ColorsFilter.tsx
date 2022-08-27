import { Box, Checkbox, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { filterDefaults } from '../../../../constants/filters';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import { ClearFilterIcon } from '../../../../../../components/ui/ClearFilterIcon';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';

const { colors } = filterDefaults;

const ColorsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const [hasReached, setHasReached] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleCheck = useCallback(
    (item: string) => {
      setSelectedColors([...selectedColors, item]);
      setArtworksFilter({
        ...artworksFilter,
        colors: [...selectedColors, item],
      });
    },
    [artworksFilter, selectedColors, setArtworksFilter]
  );

  const handleUnCheck = useCallback(
    (item: string) => {
      const uncheck = selectedColors.filter((color) => color !== item);
      setSelectedColors(uncheck);
      const colorsToFilter = uncheck.length === 0 ? colors : uncheck;
      setArtworksFilter({ ...artworksFilter, colors: colorsToFilter });
    },
    [artworksFilter, selectedColors, setArtworksFilter]
  );

  const handleClear = useCallback(() => {
    setArtworksFilter({ ...artworksFilter, colors });
    setSelectedColors([]);
  }, [artworksFilter, setArtworksFilter]);

  useEffect(() => {
    if (artworksFilter?.colors?.length === colors?.length) {
      setSelectedColors([]);
    }
  }, [artworksFilter?.colors?.length]);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          justifyContent: 'space-between',
        }}
      >
        <Typography>Colors:</Typography>
        <ClearFilterIcon sx={{ mt: 1 }} onClick={handleClear} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          p: 1,
          backgroundColor: 'lightgray',
          borderRadius: 1,
        }}
      >
        {colors?.map((color) => {
          return selectedColors.includes(color) ? (
            <Box key={color} onClick={() => handleUnCheck(color)}>
              <RadioButtonCheckedIcon sx={{ color, cursor: 'pointer' }} />
            </Box>
          ) : (
            <Box key={color} onClick={() => handleCheck(color)}>
              <CircleIcon sx={{ color, cursor: 'pointer' }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ColorsFilter;
