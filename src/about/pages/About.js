import React from 'react'

import AboutList from '../components/AboutList'
import Header from '../components/Header'

const ABOUT_ITEMS = [
  {
    id: "a1",
    image: "image",
    title: "Who Am I?",
    blurb: "ABout me first sentence blurb goes here",
    body: "Being a child of the 90s, I have always taken a keen interest in tech. I grew up with hourly quotas of dial-up internet, school PowerPoints saved on floppy disks and the PC game The Adventures of Captain Comic. As time went on, my love for technology and my savviness with computers only increased. I enjoy multiplayer gaming, especially couch gaming and LAN parties. What’s more, I have always been to the go-to guy in my family for any tech-related questions, and I have learned to impart knowledge without judgement or impatience.",
    fade: "fade-right"
  },
  {
    id: "a2",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt.",
    fade: "fade-left"
  },
  {
    id: "a3",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt.",
    fade: "fade-right",
  },
  {
    id: "a4",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt.",
    fade: "fade-left",
  },
  {
    id: "a5",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt.",
    fade: "fade-right"
  },
  {
    id: "a6",
    image: "image",
    title: "ABout Me",
    blurb: "ABout me first sentence blurb goes here",
    body: "THis is the body of the about me sections. It needs to appear only when the read more button is clicked. It will provide a decenet about of information so the formatting and lenth needs to be corredt.",
    fade: "fade-left"
  },
];

const About = () => {
  return (
    <div>
      <Header/>
      <AboutList items={ABOUT_ITEMS}/>
    </div>
  )
}

export default About 