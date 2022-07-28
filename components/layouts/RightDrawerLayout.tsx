import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';
import { MainLayout } from './MainLayout';
import { styled } from '@mui/material/styles';

const drawerWidth = 340;

type Props = {
  children: ReactNode;
  open?: boolean;
  onClose: () => void;
};

const LayoutRoot = styled('main')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

const RightDrawerLayout = ({ children, open, onClose }: Props) => {
  return (
    <LayoutRoot>
      <MainLayout
        extraStyle={{
          width: `calc(100% - ${drawerWidth}px)`,
          left: 0,
        }}
      >
        {children}
      </MainLayout>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        Artworks list here
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'block', md: 'none' },
          height: '60vh',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            height: '60vh',
            boxSizing: 'border-box',
          },
        }}
        anchor="bottom"
        open={open}
        onClose={onClose}
      >
        Artworks list here
      </Drawer>
    </LayoutRoot>
  );
};

export default RightDrawerLayout;
