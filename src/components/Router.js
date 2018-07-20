import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import RepoPage from './RepoPage';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/juliendonck" render={() => <h1>juliendonck</h1>} />
      <Route exact path="/daimler" render={() => <h1>daimler</h1>} />
      <Route exact path="/repo/:repoId" component={RepoPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
