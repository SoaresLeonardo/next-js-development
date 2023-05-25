'use client';

import { ReactNode } from 'react';
import { ProductsProvider } from './products';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};
