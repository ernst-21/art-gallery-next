import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { AuthProvider, UiProvider } from '../context';
import { lightTheme } from '../themes';
import './../styles/globals.css';
import QueryProvider from '../context/ui/QueryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryProvider>
          <SessionProvider>
              <SWRConfig
                  value={{
                      fetcher: (resource, init) =>
                          fetch(resource, init).then((res) => res.json()),
                  }}
              >
                  <AuthProvider>
                      <UiProvider>
                          <ThemeProvider theme={lightTheme}>
                              <CssBaseline />
                              <Component {...pageProps} />
                          </ThemeProvider>
                      </UiProvider>
                  </AuthProvider>
              </SWRConfig>
          </SessionProvider>
      </QueryProvider>
  );
}

export default appWithTranslation(MyApp)
