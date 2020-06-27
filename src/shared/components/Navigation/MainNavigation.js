import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css'

//Main component to render all header components 
const MainNavigation = props => {
  //State for conditional SideDrawer component display 
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  //Handler switches for conditional SideDrawer component display 
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  };
  
  return (
    <Fragment>
      {/*Conditional SideDrawer backdrop to be clickable to close the SideDrawer*/}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
      {/*Conditional SideDrawer content to be displayed if true, else null*/}

       <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        {/*Creates hamburger button menu*/}
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h2 className="main-navigation__title">
        <Link to="/">Oscar Kennedy Smith</Link>
        </h2>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation; 