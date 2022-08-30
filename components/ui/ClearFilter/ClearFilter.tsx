import { Badge, Box, Button, Divider, Toolbar } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../../../hooks/utils/useLocalStorage';
import { IArtistFilter, IArtworksFilter } from '../../../interfaces';
import isEmpty from 'lodash/isEmpty';

type ClearFilterProps = {
  filter: IArtistFilter | IArtworksFilter;
  setFunction:
    | Dispatch<SetStateAction<IArtworksFilter>>
    | Dispatch<SetStateAction<IArtistFilter>>;
};

const ClearFilter = ({ filter, setFunction }: ClearFilterProps) => {
  const { t } = useTranslation('common');

  const handleClear = useCallback(() => {
    setFunction({});
  }, [setFunction]);

  const badgeCount = useMemo(() => {
    if (!isEmpty(filter)) {
      return Object.keys(filter!).length;
    }
    return 0;
  }, [filter]);

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Badge
          color="secondary"
          badgeContent={badgeCount}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
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
        </Badge>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default ClearFilter;
