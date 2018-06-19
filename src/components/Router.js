import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Currency from './Currency';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/currency/:currencyId" component={Currency} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
