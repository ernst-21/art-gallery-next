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
        link: '/'
      },
      {
        title: 'products',
        link: '/catalog'
      },
      {
        title: 'shops',
        link: '/shops'
      },
      {
        title: 'whoWeAre',
        link: '/about-us'
      }
    ]
  },
  {
    menu: 'footer',
    title: 'sellInEjaki',
    menuList: [
      {
        title: 'areYorSupplier',
        link: '/supplier'
      },
      {
        title: 'requestShop',
        link: '/request-shop'
      },
      {
        title: 'designService',
        link: '/design-service'
      }
      // {
      //   title:'aboutUs',
      //   link:'/about-us'
      // }
    ]
  },
  {
    menu: 'footer',
    title: 'client',
    menuList: [
      {
        title: 'contact',
        link: '/contact'
      },
      {
        title: 'faq',
        link: '/faq'
      },
      {
        title: 'termAndConditions',
        link: '/term-and-conditions'
      }
      // {
      //   title:'aboutUs',
      //   link:'/about-us'
      // }
    ]
  }

];


export const mainMenu = [
  {
    _id: '1',
    title: 'products',
    link: '/catalog'
  },
  {
    _id: '2',
    title: 'shops',
    link: '/shops'
  },
  {
    _id: '3',
    title: 'whoWeAre',
    link: '/about-ejaki'
  },
  {
    _id: '4',
    title: 'areYorSupplier',
    link: '/supplier'
  }
];