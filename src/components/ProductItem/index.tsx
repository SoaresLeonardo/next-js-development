import { useDispatch } from 'react-redux';
import Card from '../Card';

type ProductProps = {
  product: {
    name: string;
    id: string;
    imageUrl: string;
    price: number;
  };
};

const ProductItem = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch({ type: 'cart/add', payload: product });
  };

  return (
    <Card
      title={product.name}
      description={product.price}
      img={product.imageUrl}
      hasButton
      textButton="Adicionar ao carrinho"
      actionButton={handleAddProductToCart}
    />
  );
};

export default ProductItem;
