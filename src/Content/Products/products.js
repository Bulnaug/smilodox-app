import React from 'react';
import './products-menu.css';
import ProductItem from './ProductItem/productItem'
import Einzelteile from '../../images/01_Bildmaterial/unedited/0K6A3311.jpg'

const Products = (props) => {

  let ProductElements = props.productData.map( product => <ProductItem article={product.article} price={product.price} image={product.image}/>);

  return (
      <div className='products'>
        <h2>Das hochqualitative Material sowie den hohen Tragekomfort und das “Fashion” für Herren und Damen</h2>
        <div className='grid-menu products-menu'>
          {
            ProductElements
          }
        </div>
        <div className='self-grid-block'>
        <div className='product-item'>
            <a href=''></a>
            <p>Einzelteile</p>
            <img src={Einzelteile}/>
            <p>xx,xx € - xx,xx €</p>
          </div>
        </div>
      </div>
  );
}

export default Products;
