import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { FunctionComponent, memo, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import PageWidthContainer from '../PageWidthContainer';

interface HideOnScrollProps {
  children?: ReactNode | any;
}

interface NavbarProps {
  children?: ReactNode | any;
}

const NavbarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
      boxShadow: theme.shadows[3]
    }
    : {
      backgroundColor: theme.palette.background.paper,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      boxShadow: 'none'
    })
}));

const HideOnScroll: FunctionComponent<HideOnScrollProps> = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const NavbarRoot: FunctionComponent<NavbarProps> = ({ children, ...props }) => {

  return (
    <HideOnScroll {...props}>
      <NavbarStyle>
        <PageWidthContainer>
          <Toolbar disableGutters
                   sx={{
                     minHeight: 64,
                     left: 0
                   }}>
            {children}
          </Toolbar>
        </PageWidthContainer>
      </NavbarStyle>
    </HideOnScroll>
  );
};

// @ts-ignore
export default memo(NavbarRoot);