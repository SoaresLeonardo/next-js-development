import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

export type ButtonProps = {
  children: ReactNode;
  backgroundcolor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, backgroundcolor, ...rest }: ButtonProps) => {
  return (
    <S.Container backgroundcolor={backgroundcolor} {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
