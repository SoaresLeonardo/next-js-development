import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  products: ReactNode;
  users: ReactNode;
};

const style = {
  width: '100%',
  maxWidth: '10rem',
  height: '10rem'
};

export default function Layout({ children, products, users }: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      {children}

      <div style={style}>{products}</div>
      <div style={style}>{users}</div>
    </div>
  );
}
