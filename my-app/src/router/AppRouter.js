import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from '../page/Details';
import Home from '../page/Home';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={Details} path="/detail" >
        </Route>
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
