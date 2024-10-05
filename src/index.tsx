import React from 'react';
import ReactDOM from 'react-dom/client';

import { Buffer } from 'buffer';
import process from 'process';

import { App } from './App';

window.Buffer = Buffer;
window.process = process;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
