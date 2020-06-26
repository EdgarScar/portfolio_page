import React from 'react';
import ReactDOM from 'react-dom';

//*  3PL that creates animations for entering and exiting components
//*  It wraps JSX elements and adds classNames 
import { CSSTransition } from 'react-transition-group'

import './SideDrawer.css';

//Generates an SideDrawer pop out for mobile ratios 
const SideDrawer = props => {
  //Can define variables as a JSX element/s
    const content = (
  //CSSTransition element wraps for animation
      <CSSTransition 
      in={props.show} 
      timeout={200} 
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      >  
      <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
    );
  //Create a portal to render this JSX 'content' in a different DOM element to where 
  //  this parent component is called and rendered. 
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer
