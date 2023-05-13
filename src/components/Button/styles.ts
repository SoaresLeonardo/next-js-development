import styled from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Pick<ButtonProps, 'backgroundColor'>;

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  padding: 10px;
  color: white;
  width: 100%;
  transition: 0.1s;
`;
