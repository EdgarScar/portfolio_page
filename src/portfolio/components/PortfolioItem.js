import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/UIElements/Button'
import './PortfolioItem.css'
import 'aos/dist/aos.css'

const PortfolioItem = (props) => {
  return (
      <div className="portfolio-item" data-aos={props.fade}>
        <Card className="portfolio-item__content">
          <div className="portfolio-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="portfolio-item__info">
            <h2>{props.name}</h2>
            <p>{props.blurb}</p>
            <p>{`Tech Stack: ${props.stack}`}</p>
          </div>
          <div className="portfolio-item__actions">
            {props.website && 
              <a href={`${props.website}`} target="blank"><Button>Website</Button></a>}
            {props.github &&
              <a href={`${props.github}`} target="blank"><Button>Github</Button></a>}
          </div>
        </Card>
      </div>
  )
};

export default PortfolioItem;
