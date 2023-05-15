import { useSelector } from 'react-redux';
import { State } from '@/redux/products/types';
import { CartItem } from '../CartItem';
import Link from 'next/link';

const Cart = () => {
  const products = useSelector((state: State) => state.products);

  if (products.length < 1) {
    return (
      <>
        <h1>Ops! não a nada aqui.</h1>
        <p>
          volte para a <Link href="/">home</Link>
        </p>
      </>
    );
  }

  return (
    <>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </>
  );
};

export default Cart;
