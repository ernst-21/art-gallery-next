import { memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IMenu } from '../../../settings/navigation';
import { Stack } from '@mui/material';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';

const FooterMenuList = ({ title, menuList }: IMenu) => {
  return (
    <Box>
      {title && <Typography component='h2' mb={2}>
        Title here
      </Typography>
      }
      <Stack direction={'column'} spacing={1}>
        {menuList.map((item) => (
          <NextMuiLink key={item.title} href={item.link} underline={'hover'} color={'text'}>
            {item.title}
          </NextMuiLink>
        ))}
      </Stack>
    </Box>
  );
};

export default memo(FooterMenuList);
