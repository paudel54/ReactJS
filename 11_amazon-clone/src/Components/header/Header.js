// Component fileName is Capitalized. 
import React from 'react'
import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <img className='header__logo' alt='logo' src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' />
            <div className="header__search">
                <input className='header_searchInput' type="text" />
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
            </div>
        </div>
    )
}
