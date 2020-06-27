import React from 'react';
import ProjectsList from '../components/ProjectsList';


//Import images 
import readitnwipe from '../../assets/readitnwipe.png'
import mygolf from '../../assets/mygolf.png'
const Projects = () => {
  const PROJECTS = [
    {
    id: 'p1',
    name: 'Read-It-n-Wipe',
    image: readitnwipe,
    stack: "MERN (minus React)",
    },
    {
    id: 'p2',
    name: 'MyGolf',
    image: mygolf,
    stack: "Ruby, Ruby on Rails",
    },
    {
    id: 'p3',
    name: 'Flower Power',
    image: mygolf,
    stack: "Ruby, Ruby on Rails",
    },
    {
    id: 'p4',
    name: 'Battleships',
    image: mygolf,
    stack: "Ruby",
    },
    {
    id: 'p5',
    name: 'Pets Club',
    image: mygolf,
    stack: "Ruby",
    },
    {
    id: 'p6',
    name: 'Have Your Say',
    image: mygolf,
    stack: "MERN",
    }
];
  return <ProjectsList items={PROJECTS}/>
};

export default Projects; 