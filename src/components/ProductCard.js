import React from 'react';
import CartButton from '../components/Buttons/CartButton';
import './ProductCard.css';

export default function ProductCard(props) {
    // const cart = useContext(CartContext);
    const itemCount = 0; //cart.products.filter(p => p.id === props.id).length;
    return (
        <div className="card">
            <div>
                <img src={props.img} alt={props.name} height={'100px'} width={'120px'} />
            </div>
            <div>
            ${props.price.toFixed(2)}
            </div>
            <div>
                { props.name } { itemCount > 0 && `(${itemCount} items)`}
            </div>
            <div className="p-btn">
                <CartButton product={props} />
            </div>
            
        </div>
    );
}
