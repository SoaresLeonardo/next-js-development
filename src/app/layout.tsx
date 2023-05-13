'use client';

import { Montserrat } from 'next/font/google';

import './globals.css';
// import { AppProvider } from '@/context';
import StyledComponentsRegistry from '@/lib';
// import store from '@/redux/store';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  // const isPublicPage = checkIsPublicRoute(pathname!);

  // Se o usuário estiver autenticado e acessar uma rota privada
  // Ele deve visualizar a página

  // Caso não estiver autenticado e acessar uma rota privada
  // Ele não deve visualizar a página

  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className}`}
        style={{ backgroundColor: '#ecf0f1' }}
      >
        <div
          style={{
            // margin: '50px auto',
            // maxWidth: '450px',
            textAlign: 'center'
          }}
        >
          {/* {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>} */}
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          {/* <ActiveLink href="/example">Example</ActiveLink>
          <ActiveLink href="/">Home</ActiveLink> */}
        </div>
      </body>
    </html>
  );
}
