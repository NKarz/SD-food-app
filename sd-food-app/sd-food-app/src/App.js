import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfIngredients from './components/ListOfIngredients.js';
import FoodRequest from './components/FoodRequest.js';

class App extends React.Component {
  render()
  {
    return (
    <div>
    <title>Yum.me</title>
    <h1><center>Yum.me!</center></h1>
    <h2><center>Your guide to economic eating</center></h2>
    <h4>What's in your fridge?</h4>
    <div><ListOfIngredients /></div>
    <div><FoodRequest /></div>
    </div>
    );
  }
}
export default App;
