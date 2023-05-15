import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

export type ButtonProps = {
  children: ReactNode;
  backgroundcolor?: string;
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, backgroundcolor, color, ...rest }: ButtonProps) => {
  return (
    <S.Container backgroundcolor={backgroundcolor} color={color} {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
