import { ReactNode } from 'react';

import * as S from './styles';

export type ContainerProps = {
  children: ReactNode;
  backgroundColor?: boolean;
};

export const Container = ({
  children,
  backgroundColor = false
}: ContainerProps) => {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );
};
