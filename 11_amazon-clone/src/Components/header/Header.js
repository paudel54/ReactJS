// Component fileName is Capitalized. 
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' alt='logo' src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' />
            </Link>

            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Hello Jangam
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>

                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}
