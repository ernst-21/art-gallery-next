// @ts-ignore
import React, { Fragment, FunctionComponent, useRef, useState } from 'react';
import {
  Box, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarRoot from './NavbarRoot';
import Image from 'next/image';
import ELink from '../../ui/Link/ELink';
import NavbarMenu from './NavbarMenu';
import AccountButton from './AccountButton';

type NavbarProps = {
  onOpenSidebar: () => void,
}

const Navbar = (props: NavbarProps) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <NavbarRoot {...other}>
      <IconButton
        onClick={onOpenSidebar}
        sx={{
          display: {
            xs: 'inline-flex',
            md: 'none'
          },
          marginRight: 1
        }}
      >
        <MenuIcon fontSize='small' />
      </IconButton>
      <Box sx={{ display: { xs: 'none', sm: 'flex', width: 92.5 } }} className={'mr-4'}>
        <ELink href={'/'}>
          <Image src={'/images/logo.svg'}
                 width={92.5} height={40}
                 alt={'Next-base'} />
        </ELink>
      </Box>
      <NavbarMenu />
        <Box sx={{flexGrow: 1}} />
      <AccountButton />
    </NavbarRoot>
  );
};

export default Navbar;