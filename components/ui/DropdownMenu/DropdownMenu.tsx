import * as React from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { NavMenu } from '../NavMenu';
import { Box, ListItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NextMuiLink } from '../Link/NextMuiLink';
import { MenuProps } from '../NavMenu/NavMenu';

export type ParentMenu = {
  _id: string;
  title: string;
  link: string;
  menuChildren?: MenuProps[];
};

export type MenuChildrenProp = {
  parent: ParentMenu;
  color?: string;
  activeColor?: string;
  activeSx?: object;
  path: string;
};

const DropdownMenu = ({
  parent,
  color,
  activeColor,
  activeSx,
  path,
}: MenuChildrenProp) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { _id, title, link, menuChildren } = parent;

  return (
    <div>
      <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
        <NavMenu
          menu={[{ _id, title, link }]}
          activeSx={{
            fontWeight: 'bold',
          }}
          activeColor={'primary'}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: -8,
          }}
          onClick={handleClick}
        >
          <ArrowDropDownIcon color="primary" />
        </div>
      </Box>

      <Menu
        sx={{ padding: 0 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuChildren?.map(({ _id, title, link }) => {
          const partialMatch = link ? path.includes(link) : false;
          const sx = partialMatch
            ? { display: 'block', ...activeSx }
            : { display: 'block' };
          return (
            <NextMuiLink
              href={parent?.link + link}
              key={title + _id}
              sx={{
                ...sx,
                '&:hover': { backgroundColor: 'secondary.light' },
              }}
              color={partialMatch ? activeColor || color : color}
              underline="none"
            >
              <ListItem>{title}</ListItem>
            </NextMuiLink>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
