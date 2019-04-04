import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PopularView from './popularView';
import LatestView from './latestView';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PopularView}/>
      <Route path='/latest' component={LatestView}/>
    </Switch>
  </main>
)

export default Main;
