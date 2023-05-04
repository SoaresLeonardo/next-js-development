'use client';

import { ReactNode } from 'react';
import { UserProvider } from './users';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};
