import * as React from 'react';
import { Dispatch, memo, SetStateAction, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography, Slider, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { IArtistFilter, IArtworksFilter } from '../../../interfaces';

type RangeFilterProps = {
  label: string;
  name: string;
  defaultValue: number[];
  filter: IArtworksFilter | IArtistFilter;
  translation: string;
  setFunction:
    | Dispatch<SetStateAction<IArtworksFilter>>
    | Dispatch<SetStateAction<IArtistFilter>>;
};

const RangeFilter = ({
  defaultValue,
  label,
  filter,
  setFunction,
  name,
  translation,
}: RangeFilterProps) => {
  const [value, setValue] = React.useState<number[]>(defaultValue);
  const { t } = useTranslation(translation);

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
    setFunction({ ...filter, [name]: value as number[] });
  };

  const clearFilter = useCallback(() => {
    setValue(defaultValue);
    const newFilter = filter;
    //@ts-ignore
    delete newFilter[name];
    setFunction({ ...newFilter });
  }, [filter, setFunction, defaultValue, name]);

  useEffect(() => {
    //@ts-ignore
    if (!filter[name]) {
      setValue(defaultValue);
    }
  }, [defaultValue, filter, name]);

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
