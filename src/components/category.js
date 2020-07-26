import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from './categoryItem.js';

import { selectCategory } from '../redux/shop/shopSelectors.js';

import '../styles/category.scss';

const CategoryPage = ({ category }) => {
  const { title, items } = category;
  return (
    <div className='category-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryName)(state)
});

export default connect(mapStateToProps)(CategoryPage);
