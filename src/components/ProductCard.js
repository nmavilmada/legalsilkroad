import React from 'react';
import './ProductCard.css';

export default function ProductCard(props) {
    return (
        <div className="card">
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                { props.description }
            </div>
        </div>
    );
}
