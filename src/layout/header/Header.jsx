import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import searchLogo from './assets/search-interface-symbol.png'
import heartLogo from './assets/heart.png'
import shopLogo from './assets/market.png'


const Header = () => {
    return (
        <header className='header'>
            <div className="header__container container">
                <p className='header__logo'>YOUR LOGO</p>
                <ul className='header__ul'>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/Shop'>SHOP</Link>
                    </li>
                    <li>
                        <Link to='/Lookbook'>LOOKBOOK</Link>
                    </li>
                    <li>
                        <Link to='/Features'>FEATURES</Link>
                    </li>
                    <li>
                        <Link to='/Pages'>PAGES</Link>
                    </li>
                    <li>
                        <Link to='/Blog'>BLOG</Link>
                    </li>
                </ul>
                <div className="header__img">
                    <img className='searchLogo' src={searchLogo} alt="" />
                    <img className='heartLogo' src={heartLogo} alt="" />
                    <img className='shopLogo' src={shopLogo} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;