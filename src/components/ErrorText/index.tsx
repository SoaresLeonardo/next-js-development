import { ReactNode } from 'react';

import * as S from './styles';

export type ErrorTextProps = {
  children: ReactNode;
};

const ErrorText = ({ children }: ErrorTextProps) => {
  return (
    <S.Container>
      <S.Error>{children && <p>{children}</p>}</S.Error>
    </S.Container>
  );
};

export default ErrorText;
