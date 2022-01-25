import React from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars/>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
