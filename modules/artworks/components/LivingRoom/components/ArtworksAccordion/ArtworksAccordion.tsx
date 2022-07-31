import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useMutation } from 'react-query';
import { searchByCategory } from '../../../../services/artworks-api';
import Collapse from './Collapse';
import { useEffect, useState } from 'react';

const categories = ['painting', 'print', 'photography'];

const ArtworksAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>('painting');
  const [fetchedArtworks, setFetchedArtworks] = useState([]);
  const {
    mutateAsync: fetchMutation,
    isLoading,
    isError,
  } = useMutation(
    'test',
    (filter: { category: string }) => searchByCategory(filter),
    {
      onSuccess: (data) => {
        //@ts-ignore
        setFetchedArtworks(data?.data);
      },
    }
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    if (expanded) {
      fetchMutation({ category: expanded });
    }
  }, [expanded, fetchMutation]);

  return (
    <div>
      {categories?.map((c, idx) => (
        <Collapse
          key={idx}
          title={c}
          data={fetchedArtworks}
          handleChange={handleChange(c as string)}
          expanded={expanded === c}
        />
      ))}
    </div>
  );
};

export default ArtworksAccordion;
