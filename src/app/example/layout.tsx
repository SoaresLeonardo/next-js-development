import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0 auto',
        gap: '2rem'
      }}
    >
      {children}
    </div>
  );
}
