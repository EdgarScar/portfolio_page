import React from 'react';

import PortfolioList from '../components/PortfolioList'

//Import images 
import readitnwipe from '../../assets/readitnwipe.png'
import mygolf from '../../assets/mygolf.png'


const PORTFOLIO_ITEMS = [
  {
    id: 'p1',
    name: 'Read-It-n-Wipe',
    image: readitnwipe,
    stack: "MERN (minus React)",
    website: "https://readitnwipe.herokuapp.com/",
    blurb: "A themed toilet paper subscription service so you'll never be caught short again!",
    },
    {
    id: 'p2',
    name: 'MyGolf',
    image: mygolf,
    stack: "Ruby, Ruby on Rails",
    website: "https://ca-mygolf.herokuapp.com/",
    blurb: "A marketplace and a meeting place for local golfers",
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