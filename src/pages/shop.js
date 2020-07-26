import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../components/categoriesOverview.js';
import CategoryPage from '../components/category.js';


const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CategoriesOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default Shop;
