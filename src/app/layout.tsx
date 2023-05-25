import { Montserrat } from 'next/font/google';

import './globals.css';
import { ProviderPage } from './providers/StyledComponentsProvider';

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
        <div>
          <ProviderPage>{children}</ProviderPage>
        </div>
      </body>
    </html>
  );
}
