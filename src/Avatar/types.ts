export interface AvatarProps {
  src: string;
  size: string;
  status: boolean | 'online' | 'offline';
  statusIconSize: string;
}
export interface StatusIconProps {
  status: boolean | 'online' | 'offline';
  size: string;
}
export interface AvatarClipProps {
  size: string;
}
