import React from 'react'

import PortfolioItem from './PortfolioItem'
import './PortfolioList.css'

const PortfolioList = props => {
  return (
    <ul className="portfolio-list">
      {props.items.map(item => 
      <PortfolioItem 
      key={item.id} 
      id={item.id} 
      image={item.image} 
      name={item.name} 
      stack={item.stack} 
      website={item.website}
      github={item.github}
      blurb={item.blurb}
      fade={item.fade}/>)}
    </ul>
  );
};

export default PortfolioList
