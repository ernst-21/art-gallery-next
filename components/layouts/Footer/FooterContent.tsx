import { memo } from 'react';
import Box from '@mui/material/Box';
import { DefaultFooterContent } from './DefaultFooter';
import { styled } from '@mui/system';
import AccordionMenu from './DefaultFooter/AccordionMenu';

const FooterContentStyled = styled(Box)(({ theme }) => ({
  paddingTop: 40,
  paddingBottom: 30,
  [theme.breakpoints.up('sm')]: {
    paddingTop: 60,
  },
}));

const FooterContent = () => {
  return (
    <FooterContentStyled>
      <Box className={'page-wrapper'}>
        <DefaultFooterContent />
        <AccordionMenu />
      </Box>
    </FooterContentStyled>
  );
};

export default memo(FooterContent);
