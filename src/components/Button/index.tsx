import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  color?: 'red' | 'green';
  onClick?: () => void;
};

const Button = ({
  children,
  isLoading = false,
  color = 'green',
  onClick
}: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {isLoading ? 'Loading' : children}
    </button>
  );
};

export default Button;
