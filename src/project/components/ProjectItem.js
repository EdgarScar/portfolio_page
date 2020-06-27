import React from 'react';
import { Link } from 'react-router-dom'

import './ProjectItem.css'
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

//Generates an unordered list item for each project 
const ProjectItem = (props) => {
  return (
    <li className='project-item'>
      <Card className='project-item__content'>
        {/*Links everything enclosed to the corresponding Route path component*/}
        <Link to={`/${props.id}/projects`}>
          <div className='project-item__image'>
            <Avatar image={props.image} alt={props.name}/>
          </div>
          <div className='project-item__info'>
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default ProjectItem;