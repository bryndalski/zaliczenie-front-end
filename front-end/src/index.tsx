import React from 'react';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: 'localhost',
  cookieSecure: false,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
