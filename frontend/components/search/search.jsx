import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: `${e.target.value}`,
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <form className="header__search" onSubmit={this.handleSearch}>
        <label htmlFor="search">Search
          <input id="search" type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="search-submit" />
      </form>
    );
  }
}

export default Search;
