import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = ButtonProps;

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => (props.color ? (props) => props.color : 'white')};
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxxsmall};
    width: 100%;
    transition: 0.1s;
  `}
`;
