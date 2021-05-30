import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/index.css';
import VoteCountdown from './components/VoteCountdown';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/votes" component={VoteCountdown} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);