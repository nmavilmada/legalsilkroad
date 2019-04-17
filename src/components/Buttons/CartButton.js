import React, { useContext } from 'react';
import './Buttons.css';



export default function CartButton(props) {
  const cart = useContext();
  return (
    <button
      onClick={() => cart.addProduct(props.product)}
    >
      Add to Cart
    </button>
  );
}
