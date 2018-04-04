import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from '../home';
import Loading from '../../components/pageLoader';

const AsyncSamplePage = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ '../../containers/samplePage'),
  {
    LoadingComponent: Loading,
  },
);

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sample" component={AsyncSamplePage} />
      </Switch>
    </div>
  </Router>
);

export default App;
