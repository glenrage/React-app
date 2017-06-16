// @flow

import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import type { RouterHistory } from 'react-router-dom';
// import { object } from 'prop-types';
// import { setSearchTerm } from './actionCreators';

const Landing = () => (

    <div className='landing'>
      <h1>Video App</h1>
      <input type='text' placeholder='Search' />
      <Link to="/search">Or Browse all</Link>
    </div>

);

export default Landing;
