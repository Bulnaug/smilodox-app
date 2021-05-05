import React from 'react';
import './footer.css';
import logo from '../images/01_Bildmaterial/LOGO/SVG/Smilodox_Logo_schwarz.svg';


const Footer = () => {
  return (
    <footer className="App-footer">
      <div>
            <div className='footer-logo'>
              <img src={logo}/>
            </div>
            <ul>
              <li><a href="#"><h4>Shop</h4></a></li>
              <li><a href="#">Damen Abteilung</a></li>
              <li><a href="#">Herren Abteilung</a></li>
              <li><a href="#">Sets</a></li>
              <li><a href="#">Einzelteile</a></li>
            </ul>        
            <ul>
              <li><a href="#"><h4>Kundenservice</h4></a></li>
              <li><a href="#">Anmelden</a></li>
              <li><a href="#">Warenkorb</a></li>
              <li><a href="#">Feedback geben</a></li>
              <li><a href="#">Nachrichten abbonieren</a></li>
            </ul>
            <ul>
              <li><a href="#"><h4>Über uns</h4></a></li>
              <li><a href="#">Kontakt</a></li>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">AGB</a></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
