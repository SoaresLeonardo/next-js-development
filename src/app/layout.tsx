import { ProviderPage } from '@/providers/StyledComponentsProvider';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ProductsProvider } from '@/providers/ProductsProvider';

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
          <ProductsProvider>
            <ProviderPage>{children}</ProviderPage>
          </ProductsProvider>
        </div>
      </body>
    </html>
  );
}
