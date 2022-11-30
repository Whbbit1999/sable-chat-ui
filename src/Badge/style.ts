import { circle } from 'sable-chat-ui/utils/styleMixins';
import styled, { css } from 'styled-components';
import { StyledBadegInterface } from './types';

const variants = {
  dot: css<StyledBadegInterface>`
    position: relative;
    padding: 5px;
    &::after {
      display: ${({ show }) => (show ? 'block' : 'none')};
      content: '';
      ${({ theme }) => circle(theme.red, '6px')};
      position: absolute;
      right: 0;
      top: 0;
    }
  `,

  default: css<StyledBadegInterface>`
    ${({ theme }) => circle(theme.red, '26px')}
    display:flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${({ showZero, count }) => !showZero && count === 0 && `visibility: hidden`}
  `,
};
const Count = styled.div`
  font-size: ${({ theme }) => theme.normal};
  color: white;
`;
const StyledBadge = styled.div<StyledBadegInterface>`
  display: inline-block;
  ${({ variant }) => variants[variant]}
`;

export default StyledBadge;
export { Count };
