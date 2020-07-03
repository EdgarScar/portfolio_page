import React from 'react'

import AboutItem from './AboutItem'
import './AboutList.css'

const AboutList = (props) => {
  return (
    <div className="about-list">
        {props.items.map(item => {
        return <li className="list-item">
            <AboutItem 
              key={item.id}
              image={item.image}
              title={item.title}
              blurb={item.blurb}
              body={item.body}
              fade={item.fade}
          />
          </li>
        })}
    </div>
  )
}

export default AboutList