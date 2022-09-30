import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import '../Product/Product.css'

const Product = (props) => {
    const{clickHandle} = props
    const { img, name, price, seller, ratings } = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            {/* Sending parammeter/data in react, has to wrap with an annonymous function like this */}
            <button onClick={()=> clickHandle(props.product)} className='btn'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>

    );
};

export default Product;