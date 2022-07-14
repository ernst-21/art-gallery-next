import { memo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import ELink from '../../ui/Link/ELink';

type FooterProps = {}

const year = new Date().getFullYear();

const FooterEndStyled = styled(Box)(({ theme }) => ({
  paddingTop: 30,
  paddingBottom: 30
  // backgroundColor: lighten('#031A1E', 0.2)
}));

const FooterEnd = () => {

  return (
    <>
      <Divider color={'#919090'} />
      <FooterEndStyled>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ sm: 'space-between' }}
               className={'page-wrapper'}>
          <Box>
            @ {year}
          </Box>
          <Box>
            <ELink href={'/'}>
              Terms and conditions
            </ELink>
          </Box>
        </Stack>
      </FooterEndStyled>
    </>
  );
};

export default memo(FooterEnd);
