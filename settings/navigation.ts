export interface IMenuItem {
  title: string;
  link: string;
}

export interface IMenu {
  menu?: string;
  title?: string;
  menuList: IMenuItem[];
}

export const navigation: IMenu[] = [
  {
    menu: 'footer',
    title: 'shops',
    menuList: [
      {
        title: 'home',
        link: '/',
      },
      {
        title: 'products',
        link: '/catalog',
      },
      {
        title: 'shops',
        link: '/shops',
      },
      {
        title: 'whoWeAre',
        link: '/about-us',
      },
    ],
  },
  {
    menu: 'footer',
    title: 'sellInEjaki',
    menuList: [
      {
        title: 'areYorSupplier',
        link: '/supplier',
      },
      {
        title: 'requestShop',
        link: '/request-shop',
      },
      {
        title: 'designService',
        link: '/design-service',
      },
      // {
      //   title:'aboutUs',
      //   link:'/about-us'
      // }
    ],
  },
  {
    menu: 'footer',
    title: 'client',
    menuList: [
      {
        title: 'contact',
        link: '/contact',
      },
      {
        title: 'faq',
        link: '/faq',
      },
      {
        title: 'termAndConditions',
        link: '/term-and-conditions',
      },
      // {
      //   title:'aboutUs',
      //   link:'/about-us'
      // }
    ],
  },
];

export const mainMenu = [
  {
    _id: '1',
    title: 'Artworks',
    link: '/artworks',
    menuChildren: [
      {
        _id: '1',
        title: 'Print',
        link: '/category/print',
      },
      {
        _id: '2',
        title: 'Painting',
        link: '/category/painting',
      },
      {
        _id: '3',
        title: 'Photography',
        link: '/category/photography',
      },
    ],
  },
  {
    _id: '2',
    title: 'Artists',
    link: '/artists',
    menuChildren: [
      {
        _id: '1',
        title: 'Photographers',
        link: '/category/photographers',
      },
      {
        _id: '2',
        title: 'Painters',
        link: '/category/painters',
      },
      {
        _id: '3',
        title: 'Printmaker',
        link: '/category/print-workers',
      },
      {
        _id: '4',
        title: 'Sculptors',
        link: '/category/sculptors',
      },
    ],
  },
  {
    _id: '3',
    title: 'Living Room',
    link: '/living-room',
  },
  {
    _id: '4',
    title: 'News',
    link: '/news',
  },
];
