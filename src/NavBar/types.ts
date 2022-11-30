import { ReactNode } from 'react';

export interface NavBarProps {
  children: any;
}
export interface MenuIconInterface {
  active: boolean;
  icon: ReactNode;
}
export interface StyledItemInterface {
  active: boolean;
}
export interface MenuItemInterface {
  icon: ReactNode;
  active: boolean;
  showBadge: boolean;
  any: any;
}
