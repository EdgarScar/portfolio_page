import React from 'react';

import PortfolioList from '../components/PortfolioList'

//Import images 
import readitnwipe from '../../assets/readitnwipe.png'
import mygolf from '../../assets/mygolf.png'
import flowerpower from '../../assets/flowerpower.png'
import battleships from '../../assets/battleships.png'
import petsclub from '../../assets/petsclub.png'
import portfolio from '../../assets/portfolio.png'
import fresboard from '../../assets/fresboard.png'
 
const PORTFOLIO_ITEMS = [
  {
    id: 'p1',
    name: 'FRES-Board',
    image: fresboard,
    stack: "React, MongoDB, ExpressJS, NodeJS",
    website: "https://fres-board-staging.herokuapp.com/auth",
    blurb: "Financial Dashboard for QLD Red Cross Emergency Services",
    credentials: "username: test@gmail.com | password: 123456",
    fade: "fade-right",
   },
  {
    id: 'p2',
    name: 'Read-It-n-Wipe',
    image: readitnwipe,
    stack: "MERN (minus React)",
    website: "https://readitnwipe.herokuapp.com/",
    github: "https://github.com/ReadItAndWipe/bum_chum",
    blurb: "Themed toilet paper subscriptions - never be caught short again!",
    fade: "fade-left",
   },
    {
    id: 'p3',
    name: 'MyGolf',
    image: mygolf,
    stack: "Ruby, Ruby on Rails",
    website: "https://ca-mygolf.herokuapp.com/",
    github: "https://github.com/EdgarScar/MyGame_Golf",
    blurb: "Hub for local golfers to socialise and buy/sell equipment",
    fade: "fade-right",
    },
    {
    id: 'p4',
    name: 'Flower Power',
    image: flowerpower,
    website: "https://ca-flowerpower.herokuapp.com/",
    github: "https://github.com/EdgarScar/flower_power",
    stack: "Ruby, Ruby on Rails",
    blurb: "Marketplace for Australian flower growers to sell their produce",
    fade: "fade-left",
    },
    {
    id: 'p5',
    name: 'Battleships',
    image: battleships,
    stack: "Ruby",
    github: "https://github.com/EdgarScar/CA_Terminal_Application",
    blurb: "The classic Battleships board game brought to life in Terminal",
    fade: "fade-right",
    },
    {
    id: 'p6',
    name: 'Portfolio (this)',
    image: portfolio,
    github: "https://github.com/EdgarScar/portfolio_page",
    stack: "React",
    blurb: "Portfolio website built with React",
    fade: "fade-left",
    },
    {
    id: 'p7',
    name: 'Pets Club (in progress)',
    image: petsclub,
    github: "https://github.com/EdgarScar/MERN_APP_PetsAndUsers",
    stack: "MERN",
    blurb: "Catalog of neighbourhood pets and their owners",
    fade: "fade-right",
    },
];

const Portfolio = () => {
  return <PortfolioList items={PORTFOLIO_ITEMS}/>
};

export default Portfolio; 