'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react';
interface IExampleContextProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

export const ExampleContext = createContext<IExampleContextProps>({
  number: 0,
  setNumber: () => console.log('setNumber not ready')
});

const ExampleProvider = ({ children }: { children: ReactNode }) => {
  const [number, setNumber] = useState(10);
  return (
    <ExampleContext.Provider value={{ number, setNumber }}>
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleProvider;
