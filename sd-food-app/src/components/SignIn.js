import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './SignIn.css';
import {BrowserRouter, Route} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDVteIZdlwMtaNINA5ZmkNvGgUYQ9FfOn8",
    authDomain: "yumme-a9bc0.firebaseapp.com",
    databaseURL: "https://yumme-a9bc0.firebaseio.com",
    projectId: "yumme-a9bc0",
    storageBucket: "yumme-a9bc0.appspot.com",
    messagingSenderId: "343478442579",
    appId: "1:343478442579:web:6d5fd0cc58807cb9b944a6",
    measurementId: "G-5FVK78GE90"
  }
  firebase.initializeApp(config);
  const auth = firebase.auth();
  const db = firebase.firestore();

class SignIn extends React.Component {
  state = {

  }

  render(){
    return(
      <body>

      <div className = "container">

        <div class="row">
        <div class="col-lg-15 col-centered">
          <form onSubmit = {this.handleSubmit} className = "white">
            <h2 className="grey-text text-darken-3"> <center>Sign In</center></h2>
            <div className = "input-field">
              <label htmlFor="username">Username: </label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className = "input-field">
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button type="button" className="btn pink lighten-1 z-depth-0" onClick = {logFunction}>Login</button>
            </div>
            <br></br>
            <div className="input-field">
              <Link to="/SignUp"><button type="button" className="btn pink lighten-1 z-depth-0" >Sign Up</button></Link>
            </div>
            <br></br>

            <br></br>
          </form>
          <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-firestore.js"></script>


      </div>
      </div>
      </div>

      </body>
    );
  }
}
var info = [];



function logFunction(){
    info.push(document.getElementById("email").value);
    info.push(document.getElementById("password").value);
    console.log(info);

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password);

    auth.onAuthStateChanged(user => {
      if (user){
        window.location.href = "/Main";
      }
      //window.location.href = "/Main";
    })

}

export default SignIn
