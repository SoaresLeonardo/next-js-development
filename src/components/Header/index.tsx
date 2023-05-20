import * as S from './styles';

type HeaderProps = {
  title: string;
  profile?: React.ReactNode;
  login?: React.ReactNode;
  cart?: React.ReactNode;
};

const Header = ({ title = '', login, cart }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.ActionWrapper>
          {login}
          {cart}
        </S.ActionWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
