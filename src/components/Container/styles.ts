import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
 max-width: 28rem;
  background-color: ${theme.colors.white};
  margin: 50px auto;
  padding: ${theme.spacings.xxxsmall};
  box-shadow: ${theme.box.shadow};
  border-radius: ${theme.border.radius};

  button {
    padding: ${theme.spacings.xxxsmall};
    background-color: ${theme.colors.purple_100};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    width: 100%;
    transition: 0.1s;

    &:hover {
      background-color: ${theme.colors.secundary};
    }
 `}
`;