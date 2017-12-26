import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search/search_container';

const Header = ({ currentUser, logout, fetchImages }) => {
  const display = currentUser ? (
    <div className="header__buttons">
      <button onClick={logout} className="header__button">Logout</button>
      <Link to="/cart" className="header__button--last"><button className="header__button">Cart</button></Link>
    </div>
  ) : (
      <div className="header__buttons">
        <Link to="/login">
          <button className="header__button">Log In</button>
        </Link>
        <Link to="/cart" className="header__button--last">
          <button className="header__button">Cart</button>
        </Link>
      </div>
    );

  return (
    <header className="header">
      <SearchContainer className="header__search" />
      <div className="header__logo" onClick={fetchImages}>
        <h1>Tactile</h1>
        <h2 className='header__tagline'><span>See it.</span><span>Click it.</span><span>Buy it.</span></h2>
      </div>

      {display}
    </header>
  );
};

export default Header;
