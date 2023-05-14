'use client';

import * as S from '@/components/Container';
import Header from '@/components/Header';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector((state) => state.currentUser);
  console.log(user);

  const dispatch = useDispatch();

  const handleUserLogin = () => {
    dispatch({
      type: 'user/login',
      payload: { name: 'Leonardo', email: 'leonardo@gmail.com' }
    });
  };

  const handleUserLogout = () => {
    dispatch({
      type: 'user/logout'
    });
  };

  return (
    <>
      <Header
        title="Header"
        hasLogin
        textLoginAction={user ? 'Logout' : 'Login'}
        loginAction={user ? handleUserLogout : handleUserLogin}
      />
      <S.Container>
        <h1>User</h1>
        {user && <p>Olá {user.name}</p>}
      </S.Container>
    </>
  );
}
