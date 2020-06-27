import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import './PortfolioItem.css'

export const PortfolioItem = (props) => {
  return <li className="portfolio-item">
          <Card className="portfolio-item__content">
            <div className="portfolio-item__image">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="portfolio-item__info">
              <h2>{props.title}</h2>
              <h3>{props.stack}</h3>
              <p>{props.blurb}</p>
            </div>
            <div className="portfolio-item__actions">
              <button>Details</button>
              <button>Details2</button>
              <button>Details3</button>
            </div>
          </Card>
        </li>;
};

export default PortfolioItem 
