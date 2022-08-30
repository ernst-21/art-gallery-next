import React, { useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ClearFilterIcon } from '../../../../../../components/ui/ClearFilterIcon';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { filterDefaults } from '../../../../constants/filters';
import { ORIENTATION_SX, ORIENTATION } from '../../../../constants/filters';
import { useInitialValue } from '../../../../../../hooks/utils/useInitialValue';

const OrientationFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { initialValue } = useInitialValue(artworksFilter, 'orientation', '');
  const [selected, setSelected] = useState<string>(
    initialValue.length ? initialValue[0] : initialValue
  );

  const selectOrientation = useCallback(
    (otn: string) => {
      setSelected(otn);
      setArtworksFilter({ ...artworksFilter, orientation: [otn] });
    },
    [artworksFilter, setArtworksFilter]
  );

  const isSelected = useCallback(
    (item: string) => {
      if (artworksFilter.orientation && selected) {
        return artworksFilter?.orientation?.length < 3 && selected === item
          ? true
          : false;
      }
    },
    [artworksFilter?.orientation, selected]
  );

  const handleClear = useCallback(() => {
    const newFilter = artworksFilter;
    delete newFilter['orientation'];
    setArtworksFilter({ ...newFilter });
  }, [artworksFilter, setArtworksFilter]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mt: 1 }}
    >
      <Typography>Orientation:</Typography>
      <Box display="flex" alignItems="center">
        {ORIENTATION?.map((item: string) => (
          <Box
            key={item}
            sx={
              isSelected(item)
                ? //@ts-ignore
                  { ...ORIENTATION_SX[item], border: '3px solid red' }
                : //@ts-ignore
                  ORIENTATION_SX[item]
            }
            onClick={() => selectOrientation(item)}
          ></Box>
        ))}
      </Box>
      <ClearFilterIcon onClick={handleClear} />
    </Box>
  );
};

export default OrientationFilter;
