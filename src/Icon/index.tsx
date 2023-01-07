import PropTypes from 'prop-types';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import StyledIcon from './style';
import { IconProps } from './types';
function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}: IconProps) {
  console.log(IconComponent);
  return (
    <ThemeProvider theme={theme}>
      <StyledIcon color={color} opacity={opacity} {...rest}>
        {IconComponent && <IconComponent width={width} height={height} />}
      </StyledIcon>
    </ThemeProvider>
  );
}

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
