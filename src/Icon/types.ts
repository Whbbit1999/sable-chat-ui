import React from 'react';

export interface IconProps {
  icon: React.ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
  opacity?: number;
  children?: any;
}
export interface StyledIconInterface {
  color?: string;
  opacity?: number;
}
export interface IconComponent {
  width?: number | string;
  height?: number | string;
}
