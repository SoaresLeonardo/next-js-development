import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Pick<Props, 'error'>>`
  ${({ error, theme }) => css`
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: white;
    border: 1px solid ${theme.colors.gray_100};
    border-radius: 0.6rem;

    &:focus-within {
      border-color: ${theme.colors.secundary};

      svg {
        color: ${theme.colors.secundary};
      }
    }

    ${error &&
    css`
      border: 2px solid ${theme.colors.error};
    `}

    button {
      padding: 0;
      background-color: transparent;
      color: ${theme.colors.gray_450};
      border: none;
      width: inherit;
    }
  `}
`;

export const Label = styled.label`
  font-size: ${theme.font.sizes.xxxxsmall};
  color: ${theme.colors.gray_500};
`;

export const Input = styled.input`
  color: ${theme.colors.black};
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
`;

export const Adorment = styled.span`
  font-size: ${theme.font.sizes.xxsmall};
  color: ${theme.colors.gray_450};
  margin: 0 0.6rem;
`;

export const ButtonVisiblePassword = styled.button``;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
`;

export const InputCheckbox = styled.input``;
