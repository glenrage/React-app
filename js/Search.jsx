import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: '',
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
    // lets react know youre updating with set state
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Video search</h1>
          <input
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
