import React from 'react';

import ProjectItem from './ProjectItem';
import Card from '../../shared/components/UIElements/Card'
import './ProjectsList.css';

//Generates an unordered list of ProjectItems 
const ProjectsList = props => {
  //Check if projects exist 
  if (props.items.length === 0){
    return (
      <div className='projects-list'>
        <Card>
          <h2>No Projects found</h2>
        </Card>
      </div>
    );
  };
  //Return unordered list of ProjectItems 
  return (
  <ul className='projects-list'>
    {/*Array of Project Objects is mapped to generate individual ProjectItems with props*/}
     {props.items.map(project =>
        <ProjectItem 
        key={project.id} 
        id={project.id} 
        image={project.image} 
        name={project.name} 
        stack={project.stack}
        blurb={project.blurb}
        />
        )} 
    </ul>
  );
};

export default ProjectsList; 