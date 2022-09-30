import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        shipping = shipping + product.shipping
    }

    const taxStr = (totalPrice * 0.10).toFixed(2)
    
    const tax = parseFloat(taxStr)
    
    const total = totalPrice + shipping + tax
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Total: ${total}</h5>
        </div>
    );
};

export default Cart