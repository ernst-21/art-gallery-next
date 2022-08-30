import * as React from 'react';
import { memo, useMemo, useEffect, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectFilterProps } from '../../../types/selectFilter.types';
import { ClearFilterIcon } from '../ClearFilterIcon';
import { useInitialValue } from '../../../hooks/utils/useInitialValue';

type FilterCapitalProps = {
  capitalize?: boolean;
};

const SelectFilter = ({
  filter,
  setFunction,
  isLoading,
  isError,
  options,
  label,
  name,
  capitalize = false,
}: SelectFilterProps & FilterCapitalProps) => {
  const { initialValue } = useInitialValue(filter, name, '');
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setFunction({ ...filter, [name]: event.target.value });
  };

  const handleClearFilter = useCallback(() => {
    setValue('');
    const newFilter = filter;
    //@ts-ignore
    delete newFilter[name];
    setFunction({ ...newFilter });
  }, [filter, name, setFunction]);

  const renderCapital = useCallback(
    (item: string) => {
      return capitalize ? item.charAt(0).toUpperCase() + item.slice(1) : item;
    },
    [capitalize]
  );

  const renderSelectMenu = useCallback(() => {
    return !isLoading ? (
      options?.map((item) => (
        <MenuItem key={item} value={item}>
          {renderCapital(item)}
        </MenuItem>
      ))
    ) : !isError ? (
      <MenuItem>Loading ...</MenuItem>
    ) : (
      <MenuItem>Error...</MenuItem>
    );
  }, [isLoading, isError, options, renderCapital]);

  const hasValues = useMemo(() => {
    return value.length > 0;
  }, [value]);

  useEffect(() => {
    //@ts-ignore
    if (!filter[name]) {
      setValue('');
    }
  }, [filter, name]);

  return (
    <Box sx={{ minWidth: '100%' }}>
      {hasValues && (
        <Box display={'flex'} justifyContent={'end'} sx={{ mb: 1 }}>
          <ClearFilterIcon onClick={handleClearFilter} sx={{ mr: 1 }} />
        </Box>
      )}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={value[0]}
          onChange={handleChange}
        >
          {renderSelectMenu()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default memo(SelectFilter);
