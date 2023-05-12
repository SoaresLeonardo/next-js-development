'use client';

import CartItem from '@/components/CartItem';
import { RootState } from '@/redux/cart/types';
import { useSelector } from 'react-redux';

import * as C from '@/components/Container';
import { selectProductsTotalPrice } from '@/redux/cart/selectors';

export default function Cart() {
  const { products } = useSelector(
    (rootReducer: RootState) => rootReducer.cartReducer
  );

  console.log(products);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <div>
      <h1>Carrinho</h1>
      {products.length > 0 && (
        <C.Container backgroundColor>
          {products &&
            products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}

          <span>{`Preço total: R$${productsTotalPrice}`}</span>
        </C.Container>
      )}
    </div>
  );
}
