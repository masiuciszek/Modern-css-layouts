/* eslint-disable import/extensions */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import AuthPage from '../../pages/AuthPage';
import About from '../../pages/About';

interface Props {

}

const Router: React.FC<Props> = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/auth" exact component={AuthPage} />
    <Route path="/about" exact component={About} />
  </Switch>
);
export default Router;
