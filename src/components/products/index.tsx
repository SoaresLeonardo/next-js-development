import ProductItem from '../ProductItem';
import * as S from './styled';
import { Product } from '@/redux/products/types';

type ProductType = Omit<Product, 'quantity'>;

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <S.Wrapper>
      <S.Container>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Products;
