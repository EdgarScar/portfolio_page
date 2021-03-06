import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

//Generates an unordered list of navigational links to app's pages in header 
const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        {/*NavLink, similar to Link but with styling capabilities*/}
        <NavLink to='/' exact>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' exact>About</NavLink>
      </li>
      <li>
        <NavLink to='/portfolio' exact>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to='/resume' exact>Resume</NavLink>
      </li>
      <li>
        <NavLink to='/contact' exact>Contact</NavLink>
      </li>
    </ul>
  )
};

export default NavLinks;
