export interface BadgeProps {
  show?: boolean;
  count?: number;
  showZero?: boolean;
  children: any;
}

export interface StyledBadegInterface {
  show: boolean;
  count: number;
  showZero: boolean;
  variant: 'dot' | 'default';
  children: any;
}
