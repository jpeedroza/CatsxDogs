import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import VoteCountdown from './components/VoteCountdown';

ReactDOM.render(
  <React.StrictMode>
    <VoteCountdown />
  </React.StrictMode>,
  document.getElementById('root')
);