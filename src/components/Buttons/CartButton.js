import React, { useContext } from 'react';
import './Buttons.css';
import CartContext from '../../CartContext';



export default function CartButton(props) {
  const cart = useContext(CartContext);
  const productCount = cart.products.filter(p => p.id === props.product.id).length;
  return (
    <button
      onClick={() => cart.addProduct(props.product)}
    >
      Add to Cart { productCount > 0 && `[${productCount}]`}
    </button>
  );
}
