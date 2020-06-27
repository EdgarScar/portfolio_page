import React, { useEffect } from 'react';
import Aos from 'aos'

import './MainHeader.css';
import 'aos/dist/aos.css'

//Generates header as a placeholder to render children components 
const MainHeader = props => {

  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);

  return <header className="main-header" data-aos="fade-down">
    {props.children}
  </header>
};

export default MainHeader;