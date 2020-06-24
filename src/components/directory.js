import React from 'react';

import MenuItem from './menu-item.js';

import '../styles/directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'meals',
          imageUrl: '%PUBLIC_URL%/KetoCafe.jpg',
          id: 1
        },
        {
          title: 'pastries',
          imageUrl: '%PUBLIC_URL%/KetoCafe.jpg',
          id: 2
        },
        {
          title: 'snacks',
          imageUrl: '%PUBLIC_URL%/KetoCafe.jpg',
          id: 3
        },
        {
          title: 'beverages',
          imageUrl: '%PUBLIC_URL%/KetoCafe.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'supplements',
          imageUrl: '%PUBLIC_URL%/KetoCafe.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
