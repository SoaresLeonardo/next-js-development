'use client';

import { store } from '@/app/redux/user';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
