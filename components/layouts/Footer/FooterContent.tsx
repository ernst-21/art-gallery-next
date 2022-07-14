import { memo } from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { DefaultFooterContent } from './DefaultFooter';
import { lighten, styled } from '@mui/system';


const FooterContentStyled = styled(Box)(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 30,
  [theme.breakpoints.up('sm')]: {
    paddingTop: 60
  }
  // backgroundColor: '#031A1E')
}));

const FooterContent = () => {

  const { t } = useTranslation('common');
  return (
    <FooterContentStyled>
      <Box className={'page-wrapper'}>
        <DefaultFooterContent />
      </Box>
    </FooterContentStyled>
  );
};

export default memo(FooterContent);
