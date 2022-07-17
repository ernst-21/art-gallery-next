// @ts-nocheck
import { memo, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const CONFIG = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  }
};

export type QueryContextProps = {
  children: ReactNode
}

const QueryProvider = ({ children }: QueryContextProps ) => {
  const [queryClient] = useState<QueryClient>(() => new QueryClient(CONFIG));

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
};

export default memo(QueryProvider);
