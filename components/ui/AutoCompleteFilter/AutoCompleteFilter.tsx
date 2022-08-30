import * as React from 'react';
import { useState, memo, Dispatch, SetStateAction, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import { IArtistFilter, IArtworksFilter } from '../../../interfaces';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type ComponentProps = {
  label: string;
  options: any[];
  filter: IArtworksFilter | IArtistFilter;
  setFilterFunction:
    | Dispatch<SetStateAction<IArtworksFilter>>
    | Dispatch<SetStateAction<IArtistFilter>>;
  name: string;
  isLoading: boolean;
  searchFn: () => void;
  equalToValueFn: (option: any, value: any) => boolean;
  optionLabelFn: (option: any) => string;
};

const renderCloseIcon = (value: string) => {
  if (value) {
    return <CloseOutlinedIcon />;
  }
  return null;
};

const AutoCompleteFilter = ({
  label,
  options,
  isLoading,
  filter,
  setFilterFunction,
  name,
  equalToValueFn,
  optionLabelFn,
  searchFn,
}: ComponentProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>('');
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event: any, newValue: any) => {
    if (newValue && typeof newValue === 'object' && newValue[name]) {
      setValue(newValue[name]);
      setFilterFunction({ ...filter, [name]: newValue[name] });
    }
    if (newValue && typeof newValue === 'string') {
      setValue(newValue);
      setFilterFunction({ ...filter, [name]: newValue });
    }
    if (!newValue) {
      const newFilter = filter;
      //@ts-ignore
      delete newFilter[name];
      setFilterFunction({ ...newFilter });
      setValue('');
      setInputValue('');
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (!filter[name]) {
      setValue('');
      setInputValue('');
    }
  }, [filter, name]);

  return (
    <Autocomplete
      value={value}
      clearIcon={renderCloseIcon(value as string)}
      id="combo-box-demo"
      onChange={handleChange}
      open={open}
      onOpen={() => {
        setOpen(true);
        searchFn();
      }}
      onClose={() => {
        setOpen(false);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      isOptionEqualToValue={equalToValueFn}
      getOptionLabel={optionLabelFn}
      loading={isLoading}
      options={options}
      sx={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default memo(AutoCompleteFilter);
