import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  'pk_test_51O8PY1SIJZ1GmJjdYkkh72fy0IfGwKVIZcY9I8ALuznYxe9MvhIqbktYTq7c2i1iqel3Q9dcjAHnf4oJQlVUWiFI00Q12Oo0Ax'
  );

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{

    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>" , authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    });
    document.title = "Amazon-Clone";
     // Replace with your desired app name
    
  },[]);
  const setFavicon = (faviconUrl) => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);
  };

  useEffect(() => {
    // Set your image URL here
    const faviconUrl = "https://images.app.goo.gl/q6cWFTXf6AuQujJYA";
    // Call the function to set the favicon
    setFavicon(faviconUrl);
  }, []);


  return (
    //BEM
    <Router>
    <div className="app">
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path='/payment' element={<Header />} />
      </Routes>
      <Elements stripe={promise}>
        <Routes>
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Elements>
      <Routes>
        <Route path='/orders' element={<Header />} />
      </Routes>
      <Routes>
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
