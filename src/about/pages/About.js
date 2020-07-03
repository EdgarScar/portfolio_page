import React from 'react'

import AboutList from '../components/AboutList'

const ABOUT_ITEMS = [
  {
    id: "a1",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt."
  }
];

const About = () => {
  return (
    <div>
      <AboutList items={ABOUT_ITEMS}/>
    </div>
  )
}

export default About 