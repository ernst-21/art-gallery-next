import React, { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import QueryProvider from '../context/ui/QueryProvider';
import { SessionProvider } from 'next-auth/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { AuthProvider, UiProvider } from '../context';
import { lightTheme } from '../themes';
import './../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { SelectedArtworkProvider } from '../context/artworks/selectedArtwork/SelectedArtworkContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  return (
    <QueryProvider>
      <SessionProvider>
        <AuthProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <SelectedArtworkProvider>
                <CssBaseline />
                <NextNProgress height={4} color="#3A64D8" />
                <Component {...pageProps} />
              </SelectedArtworkProvider>
            </ThemeProvider>
          </UiProvider>
        </AuthProvider>
      </SessionProvider>
    </QueryProvider>
  );
}

export default appWithTranslation(MyApp);
