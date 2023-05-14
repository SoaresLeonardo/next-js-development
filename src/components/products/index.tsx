import products from '@/services/data/products';
import ProductItem from '../ProductItem';
import * as S from './styled';

const Products = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Products;
