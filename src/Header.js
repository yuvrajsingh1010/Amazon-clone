import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {
  const [{ cart,user }] = useStateValue();
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }



  return (
    <div className='header'>
      <Link to="/">
      <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>
      <div className="header_search">
          <input
         className="header_searchInput" type="text"/>
         <SearchIcon className="header_searchIcon"/>
          </div>

          <div className="header_nav">
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionlineone">
                Hello {!user ? 'User': user.email}
              </span>
              <span className="header_optionsecondone">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
            </Link>
            <Link to='/orders'>
            <div className="header_option">
              <span className="header_optionlineone">
             Returns And
             </span>
             <span className="header_optionsecondone">
             Orders
             </span>

            </div> 
            </Link>
            
              
            <div className="header_option">
            <span className="header_optionlineone">
            Your
            </span>
            <span className="header_optionsecondone">
            Prime
            </span>
            </div>
            <Link to="/checkout">
            <div className="header_optionbasket">
            <ShoppingCartIcon />
            <span className="header_optionsecondone header_basketcount">
            {cart?.length}
            </span>
            </div>
            </Link>
          </div>
    </div>
  );
}

export default Header;
