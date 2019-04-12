import React from 'react';
import './Categories.css';
import ProductCard from '../components/ProductCard';


export default function Categories() {
    return (
        <div className="categories">
            {
                Array.from(Array(32).keys()).map(a => {
                    return (
                        <ProductCard
                            key={a}
                            id={a}
                            img={`https://picsum.photos/150/?image=${a}`}
                            description={`Some Name ${a}`}
                            price={a * 10}
                            name={a}
                        />
                    )
                })
            }
        </div>
    );
}