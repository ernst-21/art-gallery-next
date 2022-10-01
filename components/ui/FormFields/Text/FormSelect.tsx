import * as React from 'react';
import { memo } from 'react';
import Box from '@mui/material/Box';
import { InputLabel, Menu, MenuItem, Select, TextField } from '@mui/material';

type SelectFormProps = {
  options: any;
  label: string;
  itemValue?: any;
  itemLabel?: any;
  name: string;
  controller?: any;
  control: any;
  variant?: 'standard' | 'filled';
  sx?: {};
};

const FormSelect = ({
  options,
  label,
  sx,
  itemValue,
  itemLabel,
  name,
  variant,
  control,
  controller,
}: SelectFormProps) => {
  const Controller = controller;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          id={`select-${name}`}
          select
          label={label}
          variant={variant}
          SelectProps={{
            MenuProps: {
              sx: { maxHeight: '350px', mt: 1, marginLeft: { xs: -1, md: 0 } },
            },
          }}
        >
          {options.map((option: any) => (
            <MenuItem key={option[itemValue]} value={option[itemValue]}>
              {option[itemLabel]}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default memo(FormSelect);
