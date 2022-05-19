import * as React from 'react';
import { render } from 'react-dom';
import './inventory';
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
      <div className="selectors">
							<div className="field-group">
								<label for="size-options">Size:</label>
								<select name="sizeOptions" id="size-options">
									<option>7</option>
									<option>7.5</option>
									<option>8</option>
									<option>8.5</option>
									<option>9</option>
									<option>9.5</option>
									<option>10</option>
									<option>10.5</option>
									<option>11</option>
									<option>11.5</option>
									<option>12</option>
									<option>12.5</option>
								</select>
							</div>
						</div>
    </div>
  )
}
