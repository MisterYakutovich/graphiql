import App from './App.tsx';
import { StrictMode } from 'react';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import LanguageProvider from './context/LanguageProvider.tsx';

const queryClient = new QueryClient();

const rootElement =
  (document.getElementById('root') as HTMLElement) ||
  document.createElement('div');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
