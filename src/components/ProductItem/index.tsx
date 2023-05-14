import Card from '../Card';

type ProductProps = {
  name: string;
  id?: string;
  imageUrl: string;
  price: number;
};

const ProductItem = ({ name, imageUrl, price }: ProductProps) => {
  return (
    <Card
      title={name}
      description={price}
      img={imageUrl}
      hasButton
      textButton="Adicionar ao carrinho"
    />
  );
};

export default ProductItem;
