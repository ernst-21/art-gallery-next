import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import useToggle from '../../hooks/utils/useToggle';
import { Footer } from './Footer';
import { SideBar } from './Sidebar';
import Head from 'next/head';

const LayoutRoot = styled('main')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 65,
}));

export type MainLayoutRootProps = {
  title?: string;
  children?: ReactNode;
  extraStyle?: {};
};

export const MainLayoutRoot = (props: MainLayoutRootProps) => {
  const { title, children, extraStyle } = props;
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <>
      <LayoutRoot>
        <Head>
          <title>{title}</title>
        </Head>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
          <Footer />
        </Box>
      </LayoutRoot>
      <Navbar extraStyle={{ ...extraStyle }} onOpenSidebar={onOpen} />
      <SideBar
        activeSx={{ fontWeight: 'bold' }}
        open={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export const MainLayout = ({ children, ...props }: MainLayoutRootProps) => (
  <MainLayoutRoot {...props}>{children}</MainLayoutRoot>
);

export default MainLayout;
