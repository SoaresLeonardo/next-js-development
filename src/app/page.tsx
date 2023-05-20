'use client';

import * as S from '@/components/Container';
import Header from '@/components/Header';
import Login from '@/components/Login';
import { StateProps } from '@/redux/user';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector((state: StateProps) => state.currentUser);

  return (
    <>
      <Header title="Header" login={<Login currentUser={user} />} />
      <S.Container>
        <h1>User</h1>
        {/* {user && <p>Olá {user.name}</p>} */}
      </S.Container>
    </>
  );
}
