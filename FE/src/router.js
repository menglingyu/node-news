import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import HomePage from './routes/Home/HomePage';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
