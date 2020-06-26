import React from 'react';

import './MainHeader.css';

//Generates header as a placeholder to render children components 
const MainHeader = props => {
  return <header className="main-header">
    {props.children}
  </header>
};

export default MainHeader;