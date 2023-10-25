import React from 'react';
import ReactDOM from 'react-dom/client';

import { App, initAppEventTarget } from './app';

initAppEventTarget();

ReactDOM.createRoot(document.getElementById('react-root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
