import { ReactNode } from 'react';

import * as S from './styles';

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const Button = ({ children, backgroundColor }: ButtonProps) => {
  return (
    <S.Container backgroundColor={backgroundColor ? backgroundColor : 'blue'}>
      {children}
    </S.Container>
  );
};

export default Button;
