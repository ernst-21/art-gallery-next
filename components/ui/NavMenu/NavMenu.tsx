import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { NextMuiLink } from '../Link/NextMuiLink';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { ParentMenu } from '../DropdownMenu/DropdownMenu';

export type MenuProps = {
  _id: string;
  title: string;
  link: string;
};

export type NavMenuProps = {
  menu: ParentMenu[];
  color?: string;
  activeColor?: string;
  activeSx?: object;
};

const NavMenu = ({
  menu,
  color = 'text.primary',
  activeSx,
  activeColor = 'primary',
}: NavMenuProps) => {
  const { asPath } = useRouter();

  return (
    <>
      {menu.map((item) => {
        const partialMatch = item.link ? asPath.includes(item.link) : false;
        const sx = partialMatch
          ? { mx: 2, display: 'block', ...activeSx }
          : { mx: 2, display: 'block' };
        if (item.menuChildren) {
          return (
            <DropdownMenu
              key={item.title}
              parent={item}
              activeColor={activeColor}
              activeSx={activeSx}
              color={color}
              path={asPath}
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
            {item?.title}
          </NextMuiLink>
        );
      })}
    </>
  );
};

export default memo(NavMenu);
