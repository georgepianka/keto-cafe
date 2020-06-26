import React from 'react';

import SHOP_DATA from '../shopData.js';

import CategoryPreview from '../components/categoryPreview.js';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: SHOP_DATA
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <div className='shop-page'>
        {categories.map(({ id, ...otherProps }) => (
          <CategoryPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
