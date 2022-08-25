import * as React from 'react';
import { useMemo, memo } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { InputLabel } from '@mui/material';
import { SelectFilterProps } from '../../../types/selectFilter.types';
import { ClearFilterIcon } from '../ClearFilterIcon';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, values: readonly string[], theme: Theme) {
  return {
    fontWeight:
      values.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectMultipleFilter = ({
  name,
  defaultValue,
  filter,
  setFunction,
  options,
  label,
}: SelectFilterProps) => {
  const theme = useTheme();
  const [values, setValues] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value },
    } = event;

    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    setFunction({
      ...filter,
      [name]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleClearFilter = React.useCallback(() => {
    setValues([]);
    setFunction({ ...filter, [name]: defaultValue });
  }, [defaultValue, filter, name, setFunction]);

  const hasValues = useMemo(() => {
    return values.length > 0;
  }, [values]);

  return (
    <div>
      {hasValues && (
        <Box display={'flex'} justifyContent={'end'} sx={{ mb: 1 }}>
          <ClearFilterIcon onClick={handleClearFilter} sx={{ mr: 1 }} />
        </Box>
      )}

      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options?.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, values, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(SelectMultipleFilter);
