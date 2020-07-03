import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from './home/pages/Home'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Portfolio from './portfolio/pages/Portfolio';
import About from './about/pages/About'

function App() {
  return (
    //Router tags wrap all components in one overarching component 
  <Router>
    <MainNavigation />
    <main>
      {/*Switch prevents subsequent rendering of paths that also match*/}
      <Switch>
          <Route path="/" exact>
            <Home /> 
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio /> 
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
          </Route>
          <Route path="/contact" exact>
          </Route>
      </Switch>
      <Redirect path="/"/>
    </main>
  </Router>
  );
};

export default App;
