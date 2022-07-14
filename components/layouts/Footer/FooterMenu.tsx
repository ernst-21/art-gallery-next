import { memo } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FooterMenuList from '@/components/Layouts/Footer/FooterMenuList';
import { styled } from '@mui/system';
import { navigation } from '@/settings/navigation';

type FooterProps = {}


const ListStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('lg')]: {
    '.menu-stack-issue>:not(style)+:not(style)': {
      margin: 0,
      marginLeft: '82px'
    }
  },
  [theme.breakpoints.up('xl')]: {
    '.menu-stack-issue>:not(style)+:not(style)': {
      margin: 0,
      marginLeft: '120px'
    }
  }
}));


const FooterMenu = (props: BoxProps) => {

  return (
    <Box {...props}>
      <ListStyled>
        <Stack direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 0, sm: 2, md: 4 }}
               sx={{ margin: { md: '0 auto' } }} className={'menu-stack-issue'}>

          {
            navigation.map((menu) => <FooterMenuList key={menu.title} {...menu} />)
          }
        </Stack>
      </ListStyled>
    </Box>
  );
};

export default memo(FooterMenu);
