import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <button onClick={logout}>Logout</button>
      <button>Open Cart</button>
    </div>
  ) : (
    <Link to="/cart">
      <button>Open Cart</button>
    </Link>
  );

  return (
    <header>
      <form action="">
        <label htmlFor="search">Search
          <input id="search" type="text" />
        </label>
      </form>
      <h1>Catalog App</h1>
      {display}
    </header>
  );
};

export default Header;
