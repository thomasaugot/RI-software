import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalsProvider from './context/modalsContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalsProvider>
      <Router>
        <App />
      </Router>
    </ModalsProvider>
  </React.StrictMode>
);
