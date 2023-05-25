'use client';

import { ReactNode } from 'react';
import * as S from './styled';

type CardLinkProps = {
  children: ReactNode;
  href: string;
};

export const CardLink = ({ children, href }: CardLinkProps) => {
  return (
    <S.Container
      href={{
        pathname: href,
        query: {
          nome: 'Leonardo',
          id: 1
        }
      }}
      prefetch={false}
    >
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
