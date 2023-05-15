import Cart from '../Card/Cart';

type CartItemProps = {
  product: {
    name: string;
    id: string;
    price: number;
    imageUrl: string;
  };
};

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <Cart
      title={product.name}
      price={product.price}
      hasQuantity
      quantity={1}
      img={product.imageUrl}
      hasRemove
      hasActions
    />
  );
};
