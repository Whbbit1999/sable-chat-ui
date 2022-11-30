import PropTypes from 'prop-types';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import StyledBadge, { Count } from './style';
import { BadgeProps } from './types';

function Badge({
  show = false,
  count = 0,
  showZero = false,
  children,
  ...rest
}: BadgeProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledBadge
        variant={children ? 'dot' : 'default'}
        show={show}
        count={count}
        showZero={showZero}
        {...rest}
      >
        {children || <Count>{count}</Count>}
      </StyledBadge>
    </ThemeProvider>
  );
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
};

export default Badge;
