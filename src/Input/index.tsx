import PropTypes from 'prop-types';
import React from 'react';
import theme from 'sable-chat-ui/theme';
import { ThemeProvider } from 'styled-components';
import Icon from '../Icon';
import StyledInput, { InputContainer, Prefix, Suffix } from './style';
import { InputProps } from './types';
import SearchIcon from '/public/icons/search.svg';
function Input({
  placeholder = '请输入内容',
  prefix,
  suffix,
  ...rest
}: InputProps) {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer {...rest}>
        {prefix && <Prefix />}
        <StyledInput placeholder={placeholder} />
        {suffix && <Suffix />}
      </InputContainer>
    </ThemeProvider>
  );
}
function Search({ placeholder = '请输入搜索内容', ...rest }) {
  return (
    <Input
      {...rest}
      placeholder={placeholder}
      prefix={<Icon icon={SearchIcon} width={18} height={18} />}
    />
  );
}
Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
export { Search };
