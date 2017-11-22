import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <form action="">
      <label htmlFor="search">Search
        <input id="search" type="text" />
      </label>
    </form>
    <h1>Catalog App</h1>
    <Link to="/login">
      <button>Open Cart</button>
    </Link>
  </header>
);

export default Header;
