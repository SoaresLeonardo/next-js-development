import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 20rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    box-shadow: ${theme.box.shadow};
  `}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  color: #555555;
  font-size: 1rem;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;
