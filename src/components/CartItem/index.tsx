import { CartItemProps } from '@/redux/cart/types';
import { useDispatch } from 'react-redux';
// import {
//   decrementAmount,
//   incrementNewAmount,
//   removeProductToCart
// } from '@/redux/cart/actions';

import { FaTimes } from 'react-icons/fa';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct
} from '@/redux/cart/slice';

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleIncrementProduct = () => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrementProduct = () => {
    dispatch(decrementQuantity(product));
  };

  const handleRemoveProductToCart = () => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-20 h-20 mr-4"
      />
      <div className="flex flex-col justify-between flex-1">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="px-2 py-1 bg-gray-100 rounded-md mr-2"
              onClick={handleDecrementProduct}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="px-2 py-1 bg-gray-100 rounded-md ml-2"
              onClick={handleIncrementProduct}
            >
              +
            </button>
          </div>
          <span className="font-medium text-gray-800">{`R$${product.price}`}</span>
          <FaTimes
            className="text-gray-500 mr-2 cursor-pointer"
            onClick={handleRemoveProductToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
