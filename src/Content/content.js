import React from 'react';
import './content.css';
import Banner from './Banner/banner'
import GengerChoise from './GenderChoise/gender-choise'
import Products from './Products/products'
import Womans from './departments/damenDepartment/womans'
import Mans from './departments/herrenDepartment/mans'
import { BrowserRouter, Route } from 'react-router-dom';


const Content = (props) => {


  return (
    <BrowserRouter>
    <main className ='App-wrapper'>
      <Banner />
      <GengerChoise />
      <Route exact path='/' render={ () => <Products productData={props.products.ProductData}/> } />
      <Route path='/damen' render={ () => <Womans /> } />
      <Route path='/herren' render={ () => <Mans /> } />
    </main>
    </BrowserRouter>
  );
}

export default Content;
