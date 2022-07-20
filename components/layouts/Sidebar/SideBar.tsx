import React, { memo, useEffect } from 'react';
import { Box, Drawer, List, ListItem } from '@mui/material';
import { mainMenu } from '../../../settings/navigation';
import Image from 'next/image';
import ELink from '../../ui/Link/ELink';
import { useRouter } from 'next/router';
import SidebarMenuItem from '../../ui/SidebarMenu/SidebarMenuItem';
import { NextMuiLink } from '../../ui/Link/NextMuiLink';

type SideBarProps = {
  open: boolean;
  onClose: () => void;
  color?: string;
  activeColor?: string;
  activeSx?: object;
};

const SideBar = ({
  onClose,
  open,
  activeSx,
  color,
  activeColor,
}: SideBarProps) => {
  const { asPath } = useRouter();
  useEffect(() => {
    onClose();
  }, [asPath, onClose]);

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: (theme) =>
            // @ts-ignore
            theme.palette.sidebar || theme.palette.background.paper,
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Box onClick={onClose} p={2} pb={1}>
        <ELink href={'/'}>
          <Image
            src={'/images/logo.svg'}
            width={92.5}
            height={40}
            layout={'intrinsic'}
            alt={'Next-base'}
          />
        </ELink>
      </Box>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {mainMenu.map((item) => {
          const partialMatch = item.link ? asPath.includes(item.link) : false;
          const sx = partialMatch
            ? { display: 'block', ...activeSx }
            : { display: 'block' };
          if (item.menuChildren) {
            return (
              <SidebarMenuItem
                activeSx={activeSx}
                color={partialMatch ? activeColor || color : color}
                key={item?._id}
                parent={item}
                onClose={onClose}
              />
            );
          }
          return (
            <NextMuiLink
              href={item.link}
              key={item?.title}
              sx={sx}
              color={partialMatch ? activeColor || color : color}
              underline="none"
            >
              <ListItem onClick={onClose}>{item?.title}</ListItem>
            </NextMuiLink>
          );
        })}
      </List>
    </Drawer>
  );
};

export default memo(SideBar);
