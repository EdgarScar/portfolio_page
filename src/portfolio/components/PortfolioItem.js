import React, { useState } from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/UIElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import './PortfolioItem.css'

export const PortfolioItem = (props) => {
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
        <div className="details-container">
          <h2>THE DETAILS</h2>
        </div>
      </Modal>
      <li className="portfolio-item">
        <Card className="portfolio-item__content">
          <div className="portfolio-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="portfolio-item__info">
            <h2>{props.title}</h2>
            <h3>{props.stack}</h3>
            <p>{props.blurb}</p>
          </div>
          <div className="portfolio-item__actions">
            <Button inverse onClick={openDetailsHandler}>Details</Button>
            <Button>Details2</Button>
            <Button>Details3</Button>
          </div>
        </Card>
      </li>;
    </React.Fragment>
  )
};

export default PortfolioItem 
