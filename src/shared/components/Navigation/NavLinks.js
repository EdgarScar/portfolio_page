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
        <NavLink to='/u1/pets'>About Me</NavLink>
      </li>
      <li>
        <NavLink to='/pets/new'>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Resume</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Contact Me</NavLink>
      </li>
    </ul>
  )
};

export default NavLinks;
