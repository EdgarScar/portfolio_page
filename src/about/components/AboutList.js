import React from 'react'

import AboutItem from './AboutItem'

const AboutList = (props) => {
  return (
    <ul>
      {props.items.map(item => {
       return <li>
          <AboutItem 
            key={item.id}
            image={item.image}
            title={item.title}
            blurb={item.blurb}
            body={item.body}
        />
        </li>
      })}
    </ul>
  )
}

export default AboutList