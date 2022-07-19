import { useState, memo, useMemo } from 'react';
import Collapse from '@mui/material/Collapse';
import { MenuProps } from '../NavMenu/NavMenu';
import { ParentMenu } from '../DropdownMenu/DropdownMenu';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NextMuiLink } from '../Link/NextMuiLink';
import { useRouter } from 'next/router';

type SideMenuItemProps = {
  parent: ParentMenu;
  activeSx?: object;
  color: any;
  onClose: () => void;
};

const SidebarMenuItem = ({
  activeSx,
  color,
  parent,
  onClose,
}: SideMenuItemProps) => {
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const { menuChildren } = parent;

  const linkColor = useMemo(() => {
    const match = parent?.link ? asPath.includes(parent?.link) : false;
    const sx = match ? { display: 'block', ...activeSx } : { display: 'block' };
    return sx;
  }, [activeSx, asPath, parent?.link]);

  return (
    <>
      <ListItem
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NextMuiLink
          href={parent?.link}
          color={color}
          key={parent?.title}
          underline="none"
        >
          <Box onClick={onClose}>
            <Typography sx={linkColor}>{parent.title}</Typography>
          </Box>
        </NextMuiLink>
        {open ? (
          <div onClick={() => setOpen(false)}>
            <ExpandLess />
          </div>
        ) : (
          <div onClick={() => setOpen(true)}>
            <ExpandMore />
          </div>
        )}
      </ListItem>

      {menuChildren?.map((item: MenuProps) => {
        const partialMatch = parent.link ? asPath.includes(item.link) : false;
        const sx = partialMatch
          ? { display: 'block', ...activeSx }
          : { display: 'block' };
        return (
          <Collapse key={item?._id} in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NextMuiLink
                href={parent?.link + item.link}
                key={item?.title}
                sx={sx}
                color={color}
                underline="none"
              >
                <ListItem onClick={onClose}>
                  <Box sx={{ pl: 2 }}>
                    <Typography sx={sx}>{item.title}</Typography>
                  </Box>
                </ListItem>
              </NextMuiLink>
            </List>
          </Collapse>
        );
      })}
    </>
  );
};

export default memo(SidebarMenuItem);
