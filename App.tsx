import * as React from 'react';
import { render } from 'react-dom';
import './style.css';

export function ProductImage(props) {
  return (
        <img 
          src="https://cdn.jsdelivr.net/gh/githubjack/react-ts-ojfbp2@master/assets/red.jpg" 
          alt="Product image" />
          );
      }
  
export default function ProductCustomizer() {
  return (
    <div className="customizer">
      Hello customizer 
      <div className="product-image">
        <ProductImage />
      </div>
    </div>
  )
}
