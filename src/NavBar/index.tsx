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
import face1 from '../../public/images/face-male-1.jpg';
import Avatar from '../Avatar';
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from './style';
import { NavBarProps } from './types';
function NavBar({ profileImage, ...rest }: NavBarProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavBar {...rest}>
        <Avatar src={face1} status="online" />
        <MenuItems>
          <MenuItem showBadge active icon={faCommentDots} />
          <MenuItem icon={faUsers} />
          <MenuItem icon={faFolder} />
          <MenuItem icon={faStickyNote} />
          <MenuItem icon={faEllipsisH} />
          <MenuItem icon={faCog} />
        </MenuItems>
      </StyledNavBar>
    </ThemeProvider>
  );
}
function MenuItem({ icon, active, showBadge, ...rest }) {
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
NavBar.propTypes = {};

export default NavBar;
export { MenuItem };
