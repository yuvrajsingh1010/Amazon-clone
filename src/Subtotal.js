import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const history = useNavigate();
    const [{ cart }] = useStateValue();

  
  return (
    <div 
    className="subtotal">
   <CurrencyFormat
    renderText={(value) => (
        <>
            <p>
                Subtotal ({cart?.length} item): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" />This order contains a subtotal__gift
            </small>
        </>
   )}
   decimalScale={2}
   value={getCartTotal(cart)}//part of homework
   displayType={"text"}
   thousandSeparator={true}
   prefix={"$"}
   />
   <button onClick={e => history('/payment',{push:true})}>Proceed To Checkout</button>
   </div>
  ); 
}

export default Subtotal;