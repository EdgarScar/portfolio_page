import React, { useState, useEffect } from 'react'
import Aos from 'aos'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/UIElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import './PortfolioItem.css'
import 'aos/dist/aos.css'

const PortfolioItem = (props) => {
  //Use state for showing details of each item
  const [showDetails, setShowDetails] = useState(false);
  //Handler functions for state of details 
  const openDetailsHandler = () => setShowDetails(true);
  const closeDetailsHandler = () => setShowDetails(false);

  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);

  return (
      <li className="portfolio-item" data-aos={props.fade}>
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
              <a href={`${props.website}`}><Button>Website</Button></a>}
            {props.github &&
              <a href={`${props.github}`}><Button>Github</Button></a>}
          </div>
        </Card>
      </li>
  )
};

export default PortfolioItem;
