import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider, toast } from '@/components';
import { AppRouter } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      onError: (error) => {
        toast({
          title: 'Ошибка',
          description: error instanceof Error ? error.message : 'Произошла ошибка',
        });
      },
    },
  },
});

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/products-table">
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
