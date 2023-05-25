'use client';

import { Dispatch, ReactNode, createContext, useReducer } from 'react';

interface CountProviderProps {
  children: ReactNode;
}

interface ICountAction {
  type: 'Increment' | 'Decrement';
}

interface ICountContext {
  count: number;
  setCount: Dispatch<ICountAction>;
}

export const CountContext = createContext<ICountContext>({
  count: 0,
  setCount: () => console.log('setCount not ready')
});

const CountProvider = ({ children }: CountProviderProps) => {
  const countReducer = (state: number, action: ICountAction) => {
    switch (action.type) {
      case 'Increment':
        return state + 1;

      case 'Decrement':
        return state - 1;

      default:
        return state;
    }
  };

  const countInitialvalue = 0;

  const [count, setCount] = useReducer(countReducer, countInitialvalue);

  // const [number, setNumber] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
