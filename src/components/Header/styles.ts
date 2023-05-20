import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

export const ActionWrapper = styled.div`
  text-align: right;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;
export const Container = styled.div`
  ${({ theme }) => css`
    /* box-shadow: ${theme.box.shadow}; */
    max-width: 70rem;
    margin: 0 auto;
    padding: ${theme.spacings.xxxsmall};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
