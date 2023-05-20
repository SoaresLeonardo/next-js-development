'use client';

import Cart from '@/components/Cart';

import * as S from '@/components/Container';
import { State } from '@/redux/products/types';
import { useSelector } from 'react-redux';

export default function CartPage() {
  const { products } = useSelector((state: State) => state);
  console.log(products);
  return (
    <S.Container>
      <h1>Meu carrinho</h1>
      <Cart products={products} />
    </S.Container>
  );
}
