import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import QueryProvider from '../app/providers/reactQuery/QueryProvider.tsx';
import App from './App.tsx';

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.style.display = 'none';
    requestAnimationFrame(() => {
      document.body.style.display = '';
    });
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
);
