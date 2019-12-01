import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import Food2forkAPITest from './components/food2forkAPITest.js';
import SignIn from './components/SignIn.js';
import Main from './components/Main.js';
import SignUp from './components/SignUp.js';


var config = {
    apiKey: "AIzaSyDVteIZdlwMtaNINA5ZmkNvGgUYQ9FfOn8",
    authDomain: "yumme-a9bc0.firebaseapp.com",
    databaseURL: "https://yumme-a9bc0.firebaseio.com",
    projectId: "yumme-a9bc0",
    storageBucket: "yumme-a9bc0.appspot.com",
    messagingSenderId: "343478442579",
    appId: "1:343478442579:web:6d5fd0cc58807cb9b944a6",
    measurementId: "G-5FVK78GE90"
  };




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
