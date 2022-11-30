---
to: src/<%= name %>/index.tsx
---

import PropTypes from 'prop-types';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import Styled<%= name %> from './style';
import { <%= name %>Props } from './types';

function <%= name%>({ children, ...rest }: <%= name %>Props) {
  return (
    <ThemeProvider theme={theme}>
      <Styled<%= name %> {...rest}>
        {children}
      </Styled<%= name %>>
    </ThemeProvider>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;
