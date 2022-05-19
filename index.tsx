import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductCustomizer from './App';
import Inventory from './Inventory';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Inventory />
    <ProductCustomizer />
  </StrictMode>
);
