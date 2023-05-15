import Button from '@/components/Button';
import * as S from './styled';

type CartProps = {
  title: string;
  description?: string;
  hasDescription?: boolean;
  hasQuantity?: boolean;
  quantity?: number;
  hasActions?: boolean;
  actionIncrement?: () => void;
  actionDecrement?: () => void;
  hasRemove?: boolean;
  remove?: () => void;
  price: number;
  img?: string;
};

const Cart = ({
  title = '',
  description = '',
  img = '',
  hasDescription,
  quantity = 1,
  price = 0,
  remove,
  actionIncrement,
  actionDecrement,
  hasRemove,
  hasActions,
  hasQuantity
}: CartProps) => {
  return (
    <S.Wrapper>
      <S.Image src={img} alt={title} />
      <S.Container>
        <S.Title>{title}</S.Title>
        {hasDescription && <S.Description>{description}</S.Description>}
        <S.Price>{`R$${price}`}</S.Price>
        <S.QuantityWrapper>
          {hasActions && (
            <Button color="black" onClick={actionDecrement}>
              -
            </Button>
          )}
          {hasQuantity && <S.Quantity>{quantity}</S.Quantity>}
          {hasActions && (
            <Button color="black" onClick={actionIncrement}>
              +
            </Button>
          )}
        </S.QuantityWrapper>
        {hasRemove && (
          <Button backgroundcolor="red" onClick={remove}>
            X
          </Button>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Cart;
