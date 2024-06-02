// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuantityProvider } from './QuantityContext';

ReactDOM.render(
  <React.StrictMode>
    <QuantityProvider>
      <App />
    </QuantityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
