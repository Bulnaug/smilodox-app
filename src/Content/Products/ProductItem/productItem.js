import React from 'react';



const ProductItem = (props) => {
  return (
          <div className='product-item'>
            <a href=''></a>
            <p>{props.article}</p>
            <img src={props.image}/>
            <p>{props.price} €</p>
          </div>
  );
}

export default ProductItem;
