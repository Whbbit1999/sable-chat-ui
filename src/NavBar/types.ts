import { ReactNode } from 'react';

export interface NavBarProps {
  children: any;
  profileImage: string;
}
export interface MenuIconInterface {
  active: boolean;
  icon: ReactNode;
}
export interface StyledItemInterface {
  active: boolean;
}
export interface MenuItemInterface {
  icon: ReactNode | any;
  active?: boolean;
  showBadge?: boolean;
  [key: string]: any;
}
