import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 28rem;
    background-color: ${theme.colors.white};
    margin: 50px auto;
    padding: ${theme.spacings.xxxsmall};
    gap: ${theme.spacings.xxxsmall};
    flex-direction: column;
    display: flex;
    box-shadow: ${theme.box.shadow};
    border-radius: ${theme.border.radius};

    button {
      color: ${theme.colors.white};
      padding: ${theme.spacings.xxxsmall};
      background-color: ${theme.colors.purple_100};

      color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      width: 100%;
      transition: 0.1s;
    }

    h1 {
      text-align: center;
    }

    form {
      display: grid;
      gap: 10px;
    }
  `}
`;
