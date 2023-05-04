import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-purple-600 p-4 text-white rounded-md w-full"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
