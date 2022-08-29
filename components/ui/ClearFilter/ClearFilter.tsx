import { Box, Button, Divider, Toolbar } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { IArtistFilter, IArtworksFilter } from '../../../interfaces';

type ClearFilterProps = {
  setFunction:
    | Dispatch<SetStateAction<IArtworksFilter>>
    | Dispatch<SetStateAction<IArtistFilter>>;
};

const ClearFilter = ({ setFunction }: ClearFilterProps) => {
  const { t } = useTranslation('common');

  const handleClear = useCallback(() => {
    setFunction({});
  }, [setFunction]);

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Button
          onClick={handleClear}
          variant="contained"
          sx={{
            backgroundColor: 'lightgray',
            '&:hover': {
              backgroundColor: 'lightgray',
              color: 'black',
            },
            color: 'black',
            width: 'fit-content',
            float: 'right',
          }}
        >
          {t('filters.clearAll')}
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default ClearFilter;
