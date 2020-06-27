import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/UIElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import './PortfolioItem.css'

const PortfolioItem = (props) => {
  //Use state for showing details of each item
  const [showDetails, setShowDetails] = useState(false);
  //Handler functions for state of details 
  const openDetailsHandler = () => setShowDetails(true);
  const closeDetailsHandler = () => setShowDetails(false);

  return (
    <React.Fragment>
      <Modal 
        show={showDetails} 
        onCancel={closeDetailsHandler} 
        header={props.name} 
        contentClass="portfolio-item__modal-content"
        footerClass="portfolio-item__modal-actions"
        footer={<Button onClick={closeDetailsHandler}>Close</Button>}
      >
        <div className='image-container'>
          <h2>The is where the image goes</h2>
        </div>
      </Modal>
      <li className="portfolio-item">
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
            <a href={`${props.website}`}><Button>View Website</Button></a>
          </div>
        </Card>
      </li>;
    </React.Fragment>
  )
};

export default PortfolioItem;
