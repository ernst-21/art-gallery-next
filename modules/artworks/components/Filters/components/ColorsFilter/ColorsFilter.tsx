import { Box, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import { ClearFilterIcon } from '../../../../../../components/ui/ClearFilterIcon';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { useInitialValue } from '../../../../../../hooks/utils/useInitialValue';
import { COLORS } from '../../../../constants/filters';

const ColorsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { initialValue } = useInitialValue(artworksFilter, 'colors', []);
  const [selectedColors, setSelectedColors] = useState<string[]>(initialValue);

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

  const handleClear = useCallback(() => {
    const newFilter = artworksFilter;
    //@ts-ignore
    delete newFilter.colors;
    setArtworksFilter({ ...newFilter });
    setSelectedColors([]);
  }, [artworksFilter, setArtworksFilter]);

  const handleUnCheck = useCallback(
    (item: string) => {
      const uncheck = selectedColors.filter((color) => color !== item);
      setSelectedColors(uncheck);
      return uncheck.length === 0
        ? handleClear()
        : setArtworksFilter({ ...artworksFilter, colors: uncheck });
    },
    [artworksFilter, handleClear, selectedColors, setArtworksFilter]
  );

  useEffect(() => {
    if (!artworksFilter?.colors) {
      setSelectedColors([]);
    }
  }, [artworksFilter?.colors]);

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
        {COLORS?.map((color) => {
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
