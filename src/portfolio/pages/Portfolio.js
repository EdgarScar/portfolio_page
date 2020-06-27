import React from 'react';

import PortfolioList from '../components/PortfolioList'

//Import images 
import readitnwipe from '../../assets/readitnwipe.png'
import mygolf from '../../assets/mygolf.png'

const PORTFOLIO_ITEMS = [
  {
    id: 'p1',
    name: 'Read-It-n-Wipe',
    image: "",
    stack: "MERN (minus React)",
    },
    {
    id: 'p2',
    name: 'MyGolf',
    image: "",
    stack: "Ruby, Ruby on Rails",
    },
    {
    id: 'p3',
    name: 'Flower Power',
    image: "",
    stack: "Ruby, Ruby on Rails",
    },
    {
    id: 'p4',
    name: 'Battleships',
    image: "",
    stack: "Ruby",
    },
    {
    id: 'p5',
    name: 'Pets Club',
    image: "",
    stack: "Ruby",
    },
    {
    id: 'p6',
    name: 'Have Your Say',
    image: "",
    stack: "MERN",
    }
];

const Portfolio = () => {
  return <PortfolioList items={PORTFOLIO_ITEMS}/>
};

export default Portfolio; 