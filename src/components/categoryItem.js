import React from 'react';

import { connect } from 'react-redux';

import CustomButton from './customButton.js';
import { addItem } from '../redux/cart/cartActions.js';

import '../styles/category-item.scss';

const CategoryItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
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

      <CustomButton onClick={() => addItem(item)} addToCart>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect (
  null,
  { addItem }
)(CategoryItem);
