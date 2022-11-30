import styled from 'styled-components';
import { StyledIconInterface } from './types';

const StyledIcon = styled.div<StyledIconInterface>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : '')};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : '')};
  }
`;

export default StyledIcon;
