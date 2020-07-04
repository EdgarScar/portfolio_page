import React, { useState } from 'react'

import phone from '../../assets/mobile64.png'
import email from '../../assets/email64.png'
import linkedin from '../../assets/linkedin64.png'
import github from '../../assets/github64.png'

import './ContactItems.css'

const ContactItems = () => {
  const [showPhone, setShowPhone] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  const showPhoneHandler = (event) => {
    setShowPhone(true)
  }
  const hidePhoneHandler = (event) => {
    setShowPhone(false)
  }
  const showEmailHandler = (event) => {
    setShowEmail(true)
  }
  const hideEmailHandler = (event) => {
    setShowEmail(false)
  }

  return (
    <div className="contact-items__container">
      <div className="contact-items">
        <div className="contact-item__image" onMouseEnter={showPhoneHandler} onMouseLeave={hidePhoneHandler} src="http://i.stack.imgur.com/pC1Tv.jpg" alt="" width="120" height="120">
          <a href="tel:0423-023-755">
            <img src={phone} alt="phone"/>
          </a>
        </div>
        <div className="contact-item__image" onMouseEnter={showEmailHandler} onMouseLeave={hideEmailHandler} src="http://i.stack.imgur.com/pC1Tv.jpg" alt="" width="120" height="120">
          <a href="mailto:oscar.kennedysmith@gmail.com?subject=your title&body=TThe message">
            <img src={email} alt="email" id="btnOutlook"/>
          </a>
        </div>
        <div className="contact-item__image" src="http://i.stack.imgur.com/pC1Tv.jpg" alt="" width="120" height="120">
          <a href="https://www.linkedin.com/in/oscarkennedysmith/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
        </div>
        <div className="contact-item__image" src="http://i.stack.imgur.com/pC1Tv.jpg" alt="" width="120" height="120">
        <a href="https://github.com/EdgarScar" target="_blank"><img src={github} alt="github" /></a>
        </div>
      </div>
      </div>
  )
}

export default ContactItems 
