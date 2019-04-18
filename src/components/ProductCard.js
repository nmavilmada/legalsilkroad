import React, { useContext } from 'react';
import CartButton from '../components/Buttons/CartButton';
import './ProductCard.css';
import CartContext from '../CartContext';

export default function ProductCard(props) {
    const cart = useContext(CartContext);
    const itemCount = 0; //cart.products.filter(p => p.id === props.id).length;
    return (
        <div className="card">
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                { props.description } { itemCount > 0 && `(${itemCount} items)`}
            </div>
            <CartButton product={props} />
        </div>
    );
}
