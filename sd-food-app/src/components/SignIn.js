import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';


class SignIn extends React.Component {
  state = {

  }

  // handleChange = (e) => {
  //   console.log(e);
  // }
  // handleSubmit = (e) => {
  //   console.log(e);
  // }


  render(){
    return(
      <div className = "container">
        <form onSubmit = {this.handleSubmit} className = "white">
          <h5 className="grey-text text-darken-3"> Sign In</h5>
          <div className = "input-field">
            <label htmlFor="username">Username</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button type="button" className="btn pink lighten-1 z-depth-0" onClick = {logFunction}>Login</button>
          </div>
        </form>
      </div>
    )
  }
}
var info = [];
function logFunction(){
  console.log("DID IT REACH?!");
    info.push(document.getElementById("email").value);
    info.push(document.getElementById("password").value);
    console.log(info);
}

export default SignIn
