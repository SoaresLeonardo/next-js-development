import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

type IconContainerProps = {
  isErrored?: boolean;
};

export const Container = styled.div`
  width: 100%;
`;

export const IconContainer = styled.div<IconContainerProps>`
  input {
    background: white;
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: 100%;
    ${({ isErrored }) =>
      isErrored &&
      css`
        border: 1px solid ${theme.colors.error};
      `}
  }
`;
