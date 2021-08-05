import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';
 
 
const Header = () => {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        auth.signOut();
    }
 
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="amazon"
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__option__top">Hello {user?.email}</span>
                        <span className="header__option__bottom">{!user ? "Sign In" : "Sign Out"}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__top">Returns</span>
                        <span className="header__option__bottom">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__top">Your</span>
                        <span className="header__option__bottom">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__option__bottom header__basketCount">{basket?.length}</span>
                </div>
                    
                </Link>

            </div>
            
        </div>
    )
}
 
 
 
export default Header;
 