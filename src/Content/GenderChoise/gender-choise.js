import React from 'react';
import './gridmenu.css';
import KachelHerren from '../../images/01_Bildmaterial/unedited/0K6A4619.jpg';
import KachelFrauen from '../../images/01_Bildmaterial/unedited/0K6A3621.jpg';
import { NavLink } from 'react-router-dom';



const GenderChoise = (props) => {
  return (
      <div className='choise-menu'>
        <div className='grid-menu two-columns'>
          <div>
            <img src={KachelHerren}/>
            <div className='menu-overlay'>
              <NavLink to='/herren'></NavLink>
            <p>zum Herren Katalog</p>
            </div>
          </div>
          <div>
            <img src={KachelFrauen}/>
            <div className='menu-overlay'>
              <NavLink to='/damen'></NavLink>
              <p>zum Frauen Katalog</p>
            </div>
          </div>
         </div>
      </div>
  );
}

export default GenderChoise;
