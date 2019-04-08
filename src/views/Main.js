import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PopularView from './popularView';
import LatestView from './latestView';
import TopRatedView from './topRatedView';
import SeasonsList from './seasonsList';
import SeasonDetail from './seasonDetail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PopularView}/>
      <Route path='/latest' component={LatestView}/>
      <Route path='/toprated' component={TopRatedView}/>
      <Route path='/seasons/:id' component={SeasonsList}/>
      <Route path='/season/:id/:number/:name' component={SeasonDetail}/>
    </Switch>
  </main>
)

export default Main;
