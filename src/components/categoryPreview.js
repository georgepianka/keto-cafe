import React from 'react';

import CategoryItem from './categoryItem.js';

import '../styles/category-preview.scss';

const CategoryPreview = ({ title, items }) => (
  <div className='category-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
