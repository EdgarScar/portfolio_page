import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/UIElements/Button'
import './AboutItem.css'
import PortfolioItem from '../../portfolio/components/PortfolioItem'

const showMore = false;

const AboutItem = (props) => {
  return (
    <li className="about-item" data-aos={props.fade}>
      <Card className="about-item__content">
        <div className="about-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="about-item__data">
          <div className="about-item__info">
            <h2>{props.title}</h2>
            <p>{props.blurb}</p>
            <div className="about-item__actions">
                <button>Read more...</button>
            </div>
          </div>
          <div>
            {showMore && 
              <p>{props.body}</p>}
          </div>
        </div>
      </Card>
    </li>
  )
}




export default AboutItem