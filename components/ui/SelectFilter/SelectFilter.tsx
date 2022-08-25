import * as React from 'react';
import { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectFilterProps } from '../../../types/selectFilter.types';
import { ClearFilterIcon } from '../ClearFilterIcon';

const SelectFilter = ({
  filter,
  setFunction,
  options,
  label,
  name,
  defaultValue,
}: SelectFilterProps) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setFunction({ ...filter, [name]: event.target.value });
  };

  const handleClearFilter = React.useCallback(() => {
    setValue('');
    setFunction({ ...filter, [name]: defaultValue });
  }, [defaultValue, filter, name, setFunction]);

  const hasValues = useMemo(() => {
    return value.length > 0;
  }, [value]);

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
          {options?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default memo(SelectFilter);
