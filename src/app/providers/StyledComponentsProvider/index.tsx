'use client';

import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/app/lib';
import { ReactNode } from 'react';

type ProviderPageProps = {
  children: ReactNode;
};

export const ProviderPage = ({ children }: ProviderPageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};
