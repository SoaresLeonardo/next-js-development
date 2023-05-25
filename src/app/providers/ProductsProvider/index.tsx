'use client';

import { store } from '@/app/redux/products';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type ProductsProps = {
  children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProps) => {
  return <Provider store={store}>{children}</Provider>;
};
