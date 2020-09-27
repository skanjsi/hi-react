import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/my">My</Link>
      </li>
    </ul>
  );
}

export default Header;
