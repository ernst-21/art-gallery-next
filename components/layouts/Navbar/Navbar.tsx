// @ts-ignore
import React, { Fragment, FunctionComponent, useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarRoot from './NavbarRoot';
import Image from 'next/image';
import ELink from '../../ui/Link/ELink';
import NavbarMenu from './NavbarMenu';
import AccountButton from './AccountButton';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import Cart from '../../ui/Cart/Cart';

type NavbarProps = {
  onOpenSidebar: () => void;
};

const Navbar = (props: NavbarProps) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <NavbarRoot {...other}>
      <IconButton
        onClick={onOpenSidebar}
        sx={{
          display: {
            xs: 'inline-flex',
            md: 'none',
          },
          marginRight: 1,
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <Box
        sx={{ display: { xs: 'none', sm: 'flex', width: 92.5 } }}
        className={'mr-4'}
      >
        <Logo />
      </Box>
      <NavbarMenu />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <AccountButton />
        <Cart />
      </Box>
    </NavbarRoot>
  );
};

export default Navbar;
