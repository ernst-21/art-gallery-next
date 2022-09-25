import React from 'react';
import { Grid, Box } from '@mui/material';
import BusinessInfo from './DefaultFooter/BusinessInfo';
import { footerMenu, IFooterMenu } from '../../../settings/navigation';
import FooterMenu from './FooterMenu';

const FooterMenuGrid = () => {
  return (
    <Grid sx={{ display: { xs: 'none', lg: 'flex' } }} container spacing={2}>
      <Grid item xs={3}>
        <BusinessInfo />
      </Grid>

      {/* <Box sx={{ flexGrow: 1 }} /> */}
      {footerMenu.map((menu: IFooterMenu) => (
        <FooterMenu key={menu.title} menu={menu} />
      ))}
    </Grid>
  );
};

export default FooterMenuGrid;
