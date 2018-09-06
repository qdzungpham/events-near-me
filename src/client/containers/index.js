import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import BrowseContainer from './BrowseContainer';
import EventDetailContainer from './EventDetailContainer';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={BrowseContainer} />
      <Route path="/event/:id" component={EventDetailContainer} />
    </Switch>
  </HashRouter>
);
export default Routes;
