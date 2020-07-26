import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/directory/directorySelectors.js';

import MenuItem from './menuItem.js';

import '../styles/directory.scss';

const Directory = ({ sections }) => (
  	 <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
    	  ))}
      </div>
);

export default connect(
  createStructuredSelector({
    sections: selectDirectorySections
  })
)(Directory);
