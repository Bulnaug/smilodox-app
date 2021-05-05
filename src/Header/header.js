import React from 'react';
import './header.css';
import logo from '../images/01_Bildmaterial/LOGO/SVG/Smilodox_Logo_schwarz.svg';


const Header = () => {
  return (
      <header className="App-header">
        <div className='logo'>
          <a href='/'><img src={logo} alt='logo' /></a>
        </div>
        <div className='nav-main'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/damen">Damen</a></li>
            <li><a href="/herren">Herren</a></li>
            <li><a href="#">Sets</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
      </header>
  );
}

export default Header;
