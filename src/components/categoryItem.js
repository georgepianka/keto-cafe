import React from 'react';

import '../styles/category-item.scss';

const CategoryItem = ({ id, name, price, imageUrl }) => (
  <div className='category-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='category-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CategoryItem;
