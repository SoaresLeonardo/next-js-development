import { ProviderPage } from '@/providers/StyledComponentsProvider';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ProductsProvider } from '@/providers/ProductsProvider';
import { UserProvider } from '@/providers/UserProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className}`}
        style={{ backgroundColor: '#ecf0f1' }}
      >
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <ProviderPage>
            <ProductsProvider>{children}</ProductsProvider>
          </ProviderPage>
        </div>
      </body>
    </html>
  );
}
