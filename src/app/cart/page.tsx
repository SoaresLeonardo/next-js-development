'use client';

import Cart from '@/components/Cart';

import * as S from '@/components/Container';

export default function CartPage() {
  return (
    <S.Container>
      <h1>Meu carrinho</h1>
      <Cart />
    </S.Container>
  );
}
