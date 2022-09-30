import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const clickHandle = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products">
                {
                
                    products.map(product => <Product key={product.id}
                        product={product}
                        clickHandle= {clickHandle}
                    
                    ></Product>)
                }

            </div>
            <div className="cart">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;