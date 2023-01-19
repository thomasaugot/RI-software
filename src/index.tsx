import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider as QueryProvider, QueryClient} from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryProvider>
  </React.StrictMode>
);