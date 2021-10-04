import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={CountryList} />
        <Route path="/:id" component={CountryDetails} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);