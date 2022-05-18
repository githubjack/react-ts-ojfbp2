import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductCustomizer from './App';

import App from './App';

const rootElement = document.getElementById('ProductCustomizer');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductCustomizer />
  </StrictMode>
);
