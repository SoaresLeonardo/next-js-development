import { State } from '@/redux/products/types';
import { CartItem } from '../CartItem';

const Cart = ({ products }: State) => {
  if (products.length < 1) {
    return (
      <>
        <h1>Ops! não a nada aqui.</h1>
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
