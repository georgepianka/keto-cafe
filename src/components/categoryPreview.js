import React from 'react';
import { withRouter } from 'react-router-dom';

import CategoryItem from './categoryItem.js';

import '../styles/category-preview.scss';

const CategoryPreview = ({ title, items, match, history }) => (
  <div className='category-preview'>
    <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
    {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CategoryItem key={item.id} item={item} />
        ))} 
    </div>
  </div>
);

export default withRouter(CategoryPreview);
