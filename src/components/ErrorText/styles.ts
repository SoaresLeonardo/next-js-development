import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Error = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    margin: 0;
    padding: 0;
    margin-top: 3px;
    margin-bottom: 3px;
    p {
      font-size: 1rem;
      color: ${theme.colors.error};
    }
  `}
`;
