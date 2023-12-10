import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { useLocation } from 'react-router-dom';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const location = useLocation();  // Get the current location
    const hideButtonOnPages = ['/orders'];  // Add the paths where you want to hide the button
    const shouldHideButton = hideButtonOnPages.includes(location.pathname);
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt=''/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>🌟</p>   
                    ))}
            </div>
            {!shouldHideButton && (
                <button onClick={removeFromCart}>Remove from Cart</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct;