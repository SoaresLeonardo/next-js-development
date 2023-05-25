import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxxsmall};
    border-bottom: 1px solid ${theme.colors.gray_100};
    position: relative;
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
  `}
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 560px) {
    flex-direction: column;
    color: white;
    background-color: ${theme.colors.gray_100};
    position: fixed;
    height: 60%;
    gap: 0px;
    top: 0;
    right: 0px;
    width: 60%;
    height: 100vh;
    transition: 0.3s;
    span {
      margin-top: 80px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const MobileMenu = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const CloseMobileMenu = styled.button`
  font-size: 20px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const MenuItem = styled.span``;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
  `}
`;

export const ProfileContainer = styled.div``;
// export const Wrapper = styled.div`
//   width: 100%;
//   background-color: white;
// `;

// export const ActionWrapper = styled.div`
//   text-align: right;
//   margin-left: auto;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// export const Title = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: left;
// `;
// export const Container = styled.div`
//   ${({ theme }) => css`
//     /* box-shadow: ${theme.box.shadow}; */
//     max-width: 70rem;
//     margin: 0 auto;
//     padding: ${theme.spacings.xxxsmall};
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   `}
// `;
