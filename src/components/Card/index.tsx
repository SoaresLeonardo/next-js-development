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
  textButton = '',
  hasButton = false,
  actionButton
}: CardProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={img} alt={title} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        {description && <S.Description>{description}</S.Description>}
      </S.InfoContainer>
      {hasButton && (
        <S.CardFooter>
          <Button
            onClick={actionButton}
            backgroundcolor={theme.colors.secundary}
          >
            {textButton}
          </Button>
        </S.CardFooter>
      )}
    </S.Container>
  );
};

export default Card;
