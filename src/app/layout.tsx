'use client';

import './globals.css';

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
      <body style={{ backgroundColor: '#ecf0f1' }}>
        <div style={{ margin: '0 auto', maxWidth: '450px' }}>
          {/* {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>} */}
          {children}
          {/* <ActiveLink href="/example">Example</ActiveLink>
          <ActiveLink href="/">Home</ActiveLink> */}
        </div>
      </body>
    </html>
  );
}
