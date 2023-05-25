import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 10rem;
    height: 10rem;

    padding: 0.8rem;

    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.gray_100};

    transition: all 0.2s ease-in-out;

    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.gray_300};

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;

    &:hover {
      border-color: ${theme.colors.secundary};
      box-shadow: ${theme.box.shadow};
      color: ${theme.colors.secundary};
    }
  `}
`;
