import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'

import './components/styles/Main.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="main" id='main' role='main'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CountryList} />
          <Route path="/:id" component={CountryDetails} />
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);