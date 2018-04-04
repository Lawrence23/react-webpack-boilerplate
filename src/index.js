import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/app';
import './common.css';

const run = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.querySelector('#root'),
  );
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
