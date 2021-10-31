import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './index.css';
import App from './App';
import Catalog from './Catalog'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route path="/home" component={App} />
      <Route path="/catalog" component={Catalog} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
