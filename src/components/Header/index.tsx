import * as S from './styles';

type HeaderProps = {
  title: string;
  hasLogin?: boolean;
  textLoginAction?: string;
  loginAction?: () => void;
  icon?: () => JSX.Element;
};

const Header = ({
  title = '',
  hasLogin = false,
  textLoginAction = '',
  loginAction,
  icon
}: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{title}</S.Title>
        {hasLogin && (
          <S.ActionWrapper>
            <S.ActionText onClick={loginAction}>{textLoginAction}</S.ActionText>
            <S.ActionText>{icon && icon()}</S.ActionText>
          </S.ActionWrapper>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
