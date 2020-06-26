import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPet';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    //Router tags wrap all components in one overarching component 
  <Router>
    <MainNavigation />
    <main>
      {/*Switch prevents subsequent rendering of paths that also match*/}
      <Switch>
          <Route path="/" exact >
            <Users /> 
          </Route>
          <Route path="/pets/new" exact>
            <NewPlace/>
          </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
  );
};

export default App;
