import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
        addToDb(product.id);
    }
    return (
        <div className='shop'>
            <div className="products">
                {
                
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        clickHandle= {clickHandle}
                    
                    ></Product>)
                }

            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;