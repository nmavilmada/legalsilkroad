import React from 'react';
import './Categories.css';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

function filterProducts(p, category) {
    if (category) {
        return p.ProductCategory === category;
    }
    return true;
}

export default function Categories({match}) {
    const category = match && match.params.cat; 
    const filteredProducts = products.filter(p => filterProducts(p, category));
    return (
        <div className="categories">
            {
                filteredProducts.map((a, i) => {
                    return (
                        <ProductCard
                            key={a.ProductDescripton}
                            id={a.ProductID}
                            img={a.ProductImage}
                            description={a.ProductDescripton}
                            price={a.Price}
                            name={a.ProductName}
                        />
                    )
                })
            }
        </div>
    );
}