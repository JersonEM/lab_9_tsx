import React, { useEffect, useState } from "react";

interface Product {
    title: string;
    description: string;
    price: number;
}

export const Card: React.FC = () => {
    const [product, setProduct] = useState<Product>({ title: "", description: "", price: 0 });

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
            .then(res => res.json())
            .then((data: Product) => {
                setProduct(data);
            });
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    );
};
