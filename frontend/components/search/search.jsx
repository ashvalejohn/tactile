import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: undefined,
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
    document.getElementById('search').value = '';
  }

  render() {
    return (
      <form className="header__search" onSubmit={this.handleSearch}>
        <label htmlFor="search">
          <input id="search" type="text" placeholder="SEARCH" onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default Search;
