import React from 'react';
import preload from '../data.json';
// import { connect } from 'react-redux';
// import ShowCard from './ShowCard';
// import Header from './Header';

const Search = () => (
  <div className="search">
    {preload.shows.map((show) => <h3>{show.title}</h3>)}
  </div>
);


// export const Unwrapped = Search;
export default Search
