import React, { memo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { IFooterMenu, IMenu, IMenuItem } from '../../../settings/navigation';

type FooterMenuProps = {
  menu: IFooterMenu;
};

const FooterMenu = ({ menu }: FooterMenuProps) => {
  return (
    <Grid item md={3}>
      <Stack sx={{ paddingLeft: { md: 4 } }} spacing={2}>
        <Typography sx={{ fontWeight: 700 }}>{menu?.title}</Typography>
        {menu.menuList?.map((item: any) => (
          <Typography
            sx={{ fontSize: '15px', color: 'white' }}
            key={item.title}
          >
            {item.title}
          </Typography>
        ))}
      </Stack>
    </Grid>
  );
};

export default memo(FooterMenu);
