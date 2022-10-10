import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
export interface IMenuItem {
  title: string;
  link: string;
}

export interface IMenu {
  menu?: string;
  title?: string;
  menuList: IMenuItem[];
}

export const sideBarUserMenu = [
  {
    _id: 1,
    title: 'Profile',
    link: '/auth/profile',
    icon: AccountCircleOutlinedIcon,
  },
  {
    _id: 2,
    title: 'My Purchases',
    link: '/auth/order/payments',
    icon: MonetizationOnOutlinedIcon,
  },
];

export const mainMenu = [
  {
    _id: '1',
    title: 'Artworks',
    link: '/artworks',
  },
  {
    _id: '2',
    title: 'Artists',
    link: '/artists',
  },
  {
    _id: '4',
    title: 'News',
    link: '/news',
  },
];

export interface IFooterMenu {
  menu?: string;
  title?: string;
  menuList: Partial<IMenuItem>[];
}

export const footerMenu: IFooterMenu[] = [
  {
    menu: 'footer',
    title: 'Our company',
    menuList: [
      {
        title: 'About us',
      },
      {
        title: 'FAQ',
      },
      {
        title: 'Partnership',
      },
      {
        title: 'Sustainability',
      },
      {
        title: 'Blog',
      },
    ],
  },
  {
    menu: 'footer',
    title: 'How can we help',
    menuList: [
      {
        title: 'Place a ticket',
      },
      {
        title: 'Track your order',
      },
      {
        title: 'Help center',
      },
    ],
  },
  {
    menu: 'footer',
    title: 'Information',
    menuList: [
      {
        title: 'Contact us',
      },
      {
        title: 'Live chat',
      },
      {
        title: 'Privacy',
      },
      {
        title: 'Terms of use',
      },
    ],
  },
];
