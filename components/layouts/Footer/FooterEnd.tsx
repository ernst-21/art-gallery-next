import { memo } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

type FooterProps = {};

const year = new Date().getFullYear();

const FooterEndStyled = styled(Box)(({ theme }) => ({
  paddingTop: 30,
  paddingBottom: 30,
  // backgroundColor: lighten('#031A1E', 0.2)
}));

const FooterEnd = () => {
  return (
    <>
      <Divider color={'#919090'} />
      <FooterEndStyled>
        <Box
          display={'flex'}
          justifyContent={{ sm: 'center' }}
          className={'page-wrapper'}
        >
          <Box>Ernst-21 @ {year}</Box>
        </Box>
      </FooterEndStyled>
    </>
  );
};

export default memo(FooterEnd);
