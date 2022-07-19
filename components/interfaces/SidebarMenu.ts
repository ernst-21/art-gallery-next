import { ReactNode } from 'react';

export interface ISidebarMenu {
  active?: boolean;
  chip?: any;
  depth?: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path: string;
  title: string;
}

export interface ISidebarMenuConfig extends ISidebarMenu {
  children?: ISidebarMenu[];
}
