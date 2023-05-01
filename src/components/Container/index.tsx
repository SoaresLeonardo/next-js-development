import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-md mx-auto p-4 shadow border border-gray-200 my-4">
      {children}
    </div>
  );
};

export const InputContainer = ({ children }: ContainerProps) => {
  return (
    <div className="bg-white p-4 border border-gray-200 shadow">{children}</div>
  );
};
