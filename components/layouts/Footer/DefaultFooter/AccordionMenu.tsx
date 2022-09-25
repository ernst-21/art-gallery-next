import * as React from 'react';
import { footerMenu } from '../../../../settings/navigation';
import CollapseItem from './CollapseItem';
import { Box } from '@mui/material';
import BusinessInfo from './BusinessInfo';

const AccordionMenu = () => {
  return (
    <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
      {footerMenu.map((menu: any) => (
        <CollapseItem key={menu.title} menu={menu} />
      ))}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <BusinessInfo />
      </Box>
    </Box>
  );
};

export default AccordionMenu;
