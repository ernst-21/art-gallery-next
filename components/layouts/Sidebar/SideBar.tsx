import React, { memo, useEffect } from 'react';
import { Box, Drawer } from '@mui/material';
import FooterMenuList from '../Footer/FooterMenuList';
import {mainMenu} from '../../../settings/navigation';
import Image from 'next/image';
import ELink from '../../ui/Link/ELink';
import { useRouter } from 'next/router';

type SideBarProps = {
  open: boolean
  onClose: () => void
}

const SideBar = ({ onClose, open }: SideBarProps) => {
  const { asPath } = useRouter();
  useEffect(() => {
    onClose();
  }, [asPath, onClose]);

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // @ts-ignore
          backgroundColor: (theme) => theme.palette.sidebar || theme.palette.background.paper,
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      <Box p={2} pb={1}>
        <ELink href={'/'}>
          <Image src={'/images/logo.svg'}
                 width={92.5} height={40}
                 layout={'intrinsic'} alt={'Next-base'} />
        </ELink>
      </Box>
      <FooterMenuList menuList={mainMenu} />
    </Drawer>
  );

};

export default memo(SideBar);
