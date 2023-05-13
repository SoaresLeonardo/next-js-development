import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Pick<ButtonProps, 'backgroundcolor'>;

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundcolor};
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxxsmall};
    color: ${theme.colors.white};
    width: 100%;
    transition: 0.1s;
  `}
`;
