import { useDispatch } from 'react-redux';
import Card from '../Card';
// import { addProductToCart } from '@/redux/cart/actions';
import { ProductProps } from '@/redux/cart/types';
import { addProduct } from '@/redux/cart/slice';

const ProductItem = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch();

  const handleAddproduct = () => {
    dispatch(addProduct(product));
  };
  return (
    <Card
      title={product.name}
      description={`R$${product.price}`}
      hasButton
      actionButton={handleAddproduct}
      img={product.imageUrl}
    />
  );
};

export default ProductItem;
