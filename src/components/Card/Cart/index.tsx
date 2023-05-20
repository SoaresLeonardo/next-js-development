import * as S from './styled';
import Button from '@/components/Button';

type CartProps = {
  title: string;
  description?: string;
  hasDescription?: boolean;
  hasQuantity?: boolean;
  quantity?: number;
  hasActions?: boolean;
  hasRemove?: boolean;
  price: number;
  img?: string;
  actionIncrement?: () => void;
  actionDecrement?: () => void;
  remove?: () => void;
};

const Cart = ({
  title = '',
  description = '',
  img = '',
  hasDescription,
  quantity = 1,
  price = 0,
  hasRemove,
  hasActions,
  hasQuantity,
  remove,
  actionIncrement,
  actionDecrement
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
