import styled from 'styled-components';
import { ContainerProps } from '.';

export const Container = styled.div<Pick<ContainerProps, 'backgroundColor'>>`
  max-width: 28rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? 'white' : 'transparent'};
  margin: 50px auto;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  button {
    padding: 10px;
    background-color: #8844ee;
    color: white;
    border-radius: 8px;
    width: 100%;
    transition: 0.1s;

    &:hover {
      background-color: #a970ff;
    }
  }
`;
