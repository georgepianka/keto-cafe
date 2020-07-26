import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../components/categoriesOverview.js';
import CategoryPage from '../components/categoryPage.js';


const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CategoriesOverview} />
    <Route path={`${match.path}/:categoryName`} component={CategoryPage} />
  </div>
);

export default Shop;
