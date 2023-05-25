import { Product } from '@/app/redux/products/types';
import Cart from '../Card/Cart';
import { useDispatch } from 'react-redux';

export const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch({
      type: 'cart/remove',
      payload: product
    });
  };

  const handleIncrementProduct = () => {
    dispatch({
      type: 'cart/increment',
      payload: product
    });
  };

  const hadleDecrementProduct = () => {
    dispatch({
      type: 'cart/decrement',
      payload: product
    });
  };

  return (
    <Cart
      title={product.name}
      price={product.price}
      hasQuantity
      quantity={product.quantity}
      img={product.imageUrl}
      hasRemove
      hasActions
      remove={handleRemoveProduct}
      actionIncrement={handleIncrementProduct}
      actionDecrement={hadleDecrementProduct}
    />
  );
};
