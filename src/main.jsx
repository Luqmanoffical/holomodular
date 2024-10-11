import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the application
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>
);
