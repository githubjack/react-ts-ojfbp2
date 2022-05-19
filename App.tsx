import * as React from 'react';
// import { render } from 'react-dom';
import './Inventory';
import Inventory from './Inventory';
import './style.css';


export function SizeSelector(props){
	function sizeOptions() {
  let sizes = Inventory.allSizes;
	}
	return (
		<div className="field-group">
		<label htmlFor="size-options">Size:</label>
		<select name="sizeOptions" id="size-options">
			{sizeOptions()}

		</select>
	</div>
	);
}
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
      <div className="selectors">
			<SizeSelector />
			</div>
    </div>
  )
}
