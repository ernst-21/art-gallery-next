import React, { memo } from 'react';
import { useRouter } from 'next/router';
import {NextMuiLink} from '../Link/NextMuiLink';

type Menu = {
  _id: string
  title: string
  link: string
}

type NavMenuProps = {
  menu: Menu[],
  color?: string,
  activeColor?: string,
  activeSx?: object,
}

const NavMenu = ({ menu, color = 'text.primary', activeSx, activeColor = 'primary' }: NavMenuProps) => {
  const { asPath } = useRouter();


  return (
    <>
      {
        menu.map(({ _id, title, link }) => {
          const partialMatch = link ? asPath.includes(link) : false;
          const sx = partialMatch ? { mx: 2, display: 'block', ...activeSx } : { mx: 2, display: 'block' };
          return (
            <NextMuiLink href={link} key={_id} sx={sx} color={partialMatch?(activeColor || color):color} underline='none'>
              {title}
            </NextMuiLink>
          );
        })
      }
    </>);
};

export default memo(NavMenu);
