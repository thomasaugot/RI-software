import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalsProvider from './context/modalsContext'
import ChatProvider from './context/chat/chatContext';
import ProfileProvider from './context/profile/profileContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ModalsProvider>
    <ChatProvider>
      <ProfileProvider>
        <Router>
          <App />
        </Router>
      </ProfileProvider>
    </ChatProvider>
  </ModalsProvider>
);
