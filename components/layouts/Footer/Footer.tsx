import { memo } from 'react';
import Box from '@mui/material/Box';
import FooterContent from './FooterContent';
import FooterEnd from './FooterEnd';
import { styled } from '@mui/system';


const FooterStyled = styled(Box)(({ theme }) => ({
  backgroundColor: '#031A1E',
  color: '#FFFFFF'
}));


const Footer = () => {

  return (
    <FooterStyled>
      <FooterContent />
      <FooterEnd />
    </FooterStyled>
  );
};

export default memo(Footer);
