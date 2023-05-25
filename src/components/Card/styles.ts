import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 20rem;
    height: 32rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: ${theme.colors.white};
    text-align: center;
    position: relative;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
  `}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;

  position: relative;

  img {
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: ${theme.font.sizes.xxxsmall};
`;

export const Description = styled.p``;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
