'use client';

import { store } from '@/redux/counter';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
