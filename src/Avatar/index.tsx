import PropTypes from 'prop-types';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from './style';
import { AvatarProps } from './types';

function Avatar({
  src,
  size = '48px',
  status,
  statusIconSize = '8px',
  ...rest
}: AvatarProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledAvatar {...rest}>
        {status && (
          <StatusIcon status={status} size={statusIconSize}></StatusIcon>
        )}
        <AvatarClip size={size}>
          <AvatarImage src={src} alt="" />
        </AvatarClip>
      </StyledAvatar>
    </ThemeProvider>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  statusIconSize: PropTypes.string,
};

export default Avatar;
