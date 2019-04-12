import React, { useContext } from 'react';
import './Buttons.css';
import CartContext from '../../CartContext';


export default function CartButton(props) {
  const cart = useContext(CartContext);
  return (
    <button
      onClick={() => cart.addProduct(props.product)}
    >
      Add to Cart
    </button>
  );
}
