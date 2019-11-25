import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './SignIn.css';

class SignUp extends React.Component {
  state = {

  }

  render(){
    return(
      <div className = "container">
        <div class="row">
        <div class="col-lg-15 col-centered">
          <form onSubmit = {this.handleSubmit} className = "white">
            <h2 className="grey-text text-darken-3"> <center>Sign Up</center></h2>
            <div className = "input-field">
              <label htmlFor="username">Username: </label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className = "input-field">
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <Link to="/"><button type="button" className="btn pink lighten-1 z-depth-0" onClick = {logFunction}>Sign Up</button></Link>
            </div>
          </form>
      </div>
      </div>
      </div>
    )
  }
}
var info = [];
function logFunction(){

    info.push(document.getElementById("email").value);
    info.push(document.getElementById("password").value);
    console.log(info);
}

export default SignUp
