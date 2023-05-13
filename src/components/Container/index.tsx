import { ReactNode } from 'react';

import * as S from './styles';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
