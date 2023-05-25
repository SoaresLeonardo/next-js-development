import { ReactNode, useState } from 'react';

import * as S from './styles';

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

type HeaderProps = {
  title?: string;
  logoIcon?: ReactNode;
  hasLinks?: boolean;
  profile?: ReactNode;
};

const Header = ({
  title = 'Header',
  logoIcon,
  hasLinks,
  profile
}: HeaderProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          {logoIcon && <S.Icon>{logoIcon}</S.Icon>}
          <S.Title>{title}</S.Title>
        </S.LogoContainer>
        {hasLinks && (
          <>
            <S.MobileMenu>
              <HiMenuAlt1 />
            </S.MobileMenu>
            <S.MenuContainer>
              <S.CloseMobileMenu>
                <AiOutlineClose />
              </S.CloseMobileMenu>
              <S.MenuItem>Products</S.MenuItem>
              <S.MenuItem>Cart</S.MenuItem>
              <S.MenuItem>User</S.MenuItem>
            </S.MenuContainer>
          </>
        )}
        {profile && <S.ProfileContainer>{profile}</S.ProfileContainer>}
      </S.Content>
    </S.Container>
  );
};

export default Header;
