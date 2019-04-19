import React from 'react';
import './Categories.css';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data';


export default function Categories() {
    return (
        <div className="categories">
            {
                products.map((a, i) => {
                    return (
                        <ProductCard
                            key={a.ProductDescripton}
                            id={a.ProductID}
                            img={a.ProductImage}
                            description={a.ProductDescripton}
                            price={i * 10}
                            name={a.ProductName}
                        />
                    )
                })
            }
        </div>
    );
}