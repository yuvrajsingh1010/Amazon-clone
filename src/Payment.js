import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const history = useNavigate();
    const [{ cart, user }, dispatch] = useStateValue();
  
    const stripe = useStripe();
    const elements = useElements();
  
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stringClientSecret = clientSecret.toString();
  
    useEffect(() => {
      getClientSecret();
    }, [cart]);
  
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${Math.trunc(getCartTotal(cart) * 100)}`,
        });
    
        const receivedClientSecret = response.data.clientSecret;
    
        if (receivedClientSecret) {
          setClientSecret(receivedClientSecret);
        } else {
          // Handle the case where the server response is missing the clientSecret
          console.error("Invalid server response: Missing clientSecret");
        }
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true);
  
      const payload = await stripe.confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }).then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
  
        setSucceeded(true);
        setError(null);
        setProcessing(false);
  
        dispatch({
          type: 'EMPTY_CART',
        });
  
        history('/orders', { replace: true });
      });
    };
  
    const handleChange = (event) => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
  
    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout ({cart?.length} items)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>Jaypee University Of Engineering And Technology,</p>
              <p>Guna, Madhya Pradesh</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {cart.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
  
                <div className="payment__priceContainer">
                  <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}//part of homework
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled|| succeeded}>
                                <span>{processing ?<p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment;