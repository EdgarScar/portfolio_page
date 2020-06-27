import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import PortfolioItem from './PortfolioItem'
import './PortfolioList.css'

const PortfolioList = props => {
  return (
    <ul classNam="portfolio-list">
      {props.items.map(item => 
      <PortfolioItem 
      key={item.id} 
      id={item.id} 
      image={item.image} 
      name={item.name} 
      stack={item.stack} 
      blurb={item.blurb}/>)}
    </ul>
  );
};

export default PortfolioList
