---
to: src/<%= name %>/style.ts
---

import styled, { css } from 'styled-components';
import { <%= name %>Props } from './types';

const Styled<%= name %> = styled.div`
  position: relative;
`;


export default Styled<%= name %>;
