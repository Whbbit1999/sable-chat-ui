import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import { Badge } from '..';
import Avatar from '../Avatar';
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from './style';
import type { MenuItemInterface, NavBarProps } from './types';

function MenuItem({
  icon,
  active = false,
  showBadge = false,
  ...rest
}: MenuItemInterface) {
  console.log(icon, active);
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

function NavBar({ profileImage, ...rest }: NavBarProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online" />
        <MenuItems>
          <MenuItem showBadge active icon={faCommentDots} />
          <MenuItem icon={faUsers} />
          <MenuItem icon={faFolder} />
          <MenuItem icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem icon={faCog} style={{ alignSelf: 'end' }} />
        </MenuItems>
      </StyledNavBar>
    </ThemeProvider>
  );
}

NavBar.propTypes = {};

export default NavBar;
export { MenuItem };
