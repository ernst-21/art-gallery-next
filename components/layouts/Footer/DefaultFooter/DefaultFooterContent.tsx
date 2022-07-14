import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'next-i18next';


const DefaultFooterContent = () => {

  const { t } = useTranslation('common');
  return (
    <Stack className={'page-wrapper'} direction={{ xs: 'column', md: 'row' }}>
      Footer here
    </Stack>
  );
};

export default memo(DefaultFooterContent);
