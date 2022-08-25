import { Dispatch, SetStateAction } from 'react';
import { IArtistFilter, IArtworksFilter } from '../interfaces';

export type SelectFilterProps = {
  name: string;
  defaultValue: string[] | undefined;
  filter: IArtworksFilter | IArtistFilter;
  setFunction:
    | Dispatch<SetStateAction<IArtworksFilter>>
    | Dispatch<SetStateAction<IArtistFilter>>;
  options: string[] | undefined;
  label: string;
};
