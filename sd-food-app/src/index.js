import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';

import Food2forkAPITest from './components/food2forkAPITest.js';
import SignIn from './components/SignIn.js';
import Main from './components/Main.js';
import SignUp from './components/SignUp.js';

const routing = (
  <BrowserRouter>
    <Route exact path="/" component={SignIn}/>
    <Route path="/main" component={Main}/>
    <Route path="/SignUp" component={SignUp}/>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
