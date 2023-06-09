import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
