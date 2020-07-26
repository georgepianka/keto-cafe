import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from './categoryPreview.js';

import { selectCategoriesForPreview } from '../redux/shop/shopSelectors.js';

import '../styles/categories-overview.scss';

const categoriesOverview = ({ categories }) => (
  <div className='categories-overview'>
    {categories.map(({ id, ...otherCategoryProps }) => (
      <CategoryPreview key={id} {...otherCategoryProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForPreview
});

export default connect(mapStateToProps)(categoriesOverview);
