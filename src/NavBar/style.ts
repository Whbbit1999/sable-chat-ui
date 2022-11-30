import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledAvatar, { StatusIcon } from 'sable-chat-ui/Avatar/style';
import { activeBar } from 'sable-chat-ui/utils/styleMixins';
import styled from 'styled-components';
import { MenuIconInterface, StyledItemInterface } from './types';

const MenuIcon = styled(FontAwesomeIcon)<MenuIconInterface>`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;
const StyledMenuItem = styled.div<StyledItemInterface>`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${activeBar({})}
    ${({ active }) => (active ? '' : `&::before, &::after{height: 0px}`)}
  }
`;

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;
const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export default StyledNavBar;
export { MenuIcon, StyledMenuItem, MenuItems };
