import Button from '../Button';
import { theme } from '@/styles/theme';

import * as S from './styles';

type CardProps = {
  title: string;
  description?: string | number;
  img?: string;
  hasButton?: boolean;
  textButton?: string;
  actionButton?: () => void;
  hasDescription?: boolean;
};

const Card = ({
  title = '',
  description = '',
  img = '',
  hasButton = false,
  textButton = '',
  actionButton
}: CardProps) => {
  return (
    <S.Wrapper>
      <S.CardImage src={img} alt={title} />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        {hasButton && (
          <Button
            backgroundcolor={theme.colors.purple_100}
            type="button"
            onClick={actionButton}
          >
            {textButton}
          </Button>
        )}
      </S.CardContent>
    </S.Wrapper>
  );
};

export default Card;
