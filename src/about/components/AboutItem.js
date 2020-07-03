import React, { useState } from 'react'

import Card from '../../shared/components/UIElements/Card'
import 'aos/dist/aos.css'
import './AboutItem.css'

const AboutItem = (props) => {
  const [showBody, setShowBody] = useState(false)

  const showBodyHandler = (event) => {
    setShowBody(!showBody)
  }

  return (
    <div className="about-item" data-aos={props.fade}>
      <Card className="about-item__content">
        <div className="about-item__image">
          <img src={props.image} alt={props.name} onClick={showBodyHandler}/>
        </div>
        <div className="about-item__data">
          <div className="about-item__info">
            <h2>{props.title}</h2>
            <p>{props.blurb}</p>
          <div className="about-item__actions">
              <button onClick={showBodyHandler}>{showBody ? `Close` : `Read more...`}</button>
          </div>
          </div>
        </div>
      </Card>
      <div className="about-item__body">
        {showBody && 
          <p>{props.body}</p>}
      </div>
    </div>
  )
}




export default AboutItem