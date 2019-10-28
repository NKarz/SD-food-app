import React from 'react';
import './App.css';
import Bootstrap from './bootstrap/css/bootstrap.css';
import ListOfIngredients from './components/ListOfIngredients.js';
import Food2forkAPITest from './components/food2forkAPITest.js';

class App extends React.Component {
  render()
  {
    return (
    <div className="container">
    <h1>
      <center>Yum.me!</center>
    </h1>
    <h2>
      <center>Your guide to economic eating</center>
    </h2>

    <div id="contents">
      <title>Yum.me</title>
      <div class="row">
        <div class="col">
          <h4>What's in your fridge?</h4>
          <div><ListOfIngredients /> </div>
          <br></br>
        </div>
        <div class="col">
        <div id="Recipe">
        A Recipe goes here.
        </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}


export default App;
