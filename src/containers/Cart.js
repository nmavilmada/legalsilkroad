import React, { useContext } from 'react';
import './Cart.css';
import CartContext from '../CartContext';


export default function Cart(props) {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.products.reduce((a, c) => {
        if (a[c.id]) {
            const currentQuantity = a[c.id].quantity;
            a[c.id] = {
                ...c,
                quantity: currentQuantity + 1
            };
            return a;
        } else {
            a[c.id] = {
                ...c,
                quantity: 1
            };
            return a;
        }
    }, {});

    const totalPrice = Object.values(cartItems).reduce((a, c) => {
        return a + (c.quantity * c.price);
    }, 0);

    return (
        <div className="product-table">
            <div>
                ID
            </div>
            <div>
                Name
            </div>
            <div>
                Product
            </div>
            <div>
                Quantity
            </div>
            <div>
                Sub Total
            </div>
            <div>
                Remove?
            </div>
            {
                Object.values(cartItems).map(i => {
                    return (
                        <React.Fragment
                            key={`cart-item-${i.id}`}
                        >
                            <div className="line">
                                {i.id}
                            </div>
                            <div className="line">
                                {i.name}
                            </div>
                            <div className="line">
                                <img src={i.img} alt={i.name} style={{ width: '60px' }} />
                            </div>
                            <div className="line">
                                {i.quantity}
                            </div>
                            <div className="line">
                                ${(i.price * i.quantity).toFixed(2)}
                            </div>
                            <div className="line">
                                <a href={'#remove'} onClick={() => cartContext.removeProduct(i.id)}>x</a>
                            </div>
                        </React.Fragment>
                    )
                })
            }

            <div className="total-row"></div>
            <div className="total-row"></div>
            <div className="total-row"></div>
            <div className="total-row"></div>

            <div className="total-row">
                ${ totalPrice.toFixed(2) }
            </div>

            <div className="total-row"></div>

        </div>
    );
}
