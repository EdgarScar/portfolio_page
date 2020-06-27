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
    blurb: "",
    },
    {
    id: 'p2',
    name: 'MyGolf',
    image: "",
    stack: "Ruby, Ruby on Rails",
    blurb: "",
    },
    {
    id: 'p3',
    name: 'Flower Power',
    image: "",
    stack: "Ruby, Ruby on Rails",
    blurb: "",
    },
    {
    id: 'p4',
    name: 'Battleships',
    image: "",
    stack: "Ruby",
    blurb: "",
    },
    {
    id: 'p5',
    name: 'Pets Club',
    image: "",
    stack: "Ruby",
    blurb: "",
    },
    {
    id: 'p6',
    name: 'Have Your Say',
    image: "",
    stack: "MERN",
    blurb: "",
    }
];

const Portfolio = () => {
  return <PortfolioList items={PORTFOLIO_ITEMS}/>
};

export default Portfolio; 