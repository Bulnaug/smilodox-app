import React from 'react';
import './banner.css';
import HeaderImage from '../../images/01_Bildmaterial/unedited/0K6A4215.jpg';


const Banner = (props) => {
  return (
      <div className='main-banner' data-image-src={HeaderImage}>
        <img src={HeaderImage}/>
        <h1>die neue Kollektion “Concrete Essentials”</h1>
      </div>
  );
}

export default Banner;
