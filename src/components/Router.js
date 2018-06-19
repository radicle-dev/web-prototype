import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import RepoPage from './RepoPage';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/repo/:repoId" component={RepoPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
