import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import Food2forkAPITest from '../components/food2forkAPITest.js';
import SignIn from '../components/SignIn.js';
import {BrowserRouter, Route} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import "./Main.css";

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state={
      ingredients: [],
      displayAPI: false
    };
  }

  render()
  {
     return (
       <body>
     <div>

     <title>Yum.me</title>
     <h1>
       <center>Yum.me!</center>
     </h1>
     <h2>
       <center>Your guide to economic eating</center>
     </h2>
     <div id="contents">
       <title>Yum.me</title>
       <div className="row">
           <div className="col">
             <h4>What's in your fridge?</h4>
             <div className="listOfIngredients">
                   <input className="allCheckboxes" type="checkbox" value="Rice" /> Rice <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Eggs" /> Eggs <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Milk" /> Milk <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Bread" /> Bread <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Cheese" /> Cheese <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Wine" /> Wine <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Mushrooms" /> Mushrooms <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Garlic" /> Garlic <br></br>

              </div>
              <br></br>
              <button type="button" className="btn btn-info" onClick={() => this.testfunction()}>Submit</button>

           </div>
           <div className="col">
             {
               (this.state.displayAPI)?(
                 <Food2forkAPITest ingredients={(this.state.ingredients).join()} />
               ) : (null)
             }
           </div>

           <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js"></script>
           <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js"></script>
           <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-firestore.js"></script>


         </div>
       </div>
     </div>

     </body>
     );
  }

  testfunction(){
    var checkedValues = [];

    var recipeEdit = document.getElementById("Recipe");


    var inputElements = document.getElementsByClassName("allCheckboxes");

    for(var i =0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        checkedValues.push(inputElements[i].value);
        this.state.ingredients.push(inputElements[i].value);
      }
    }
    // console.log("Ingredience");
    console.log("Ingredients in Main" + this.state.ingredients);

    this.setState({
      displayAPI: !this.state.displayAPI
    })

    console.log("DISPLAY?" + this.state.displayAPI);

    if(this.state.displayAPI){
      return(
        <div>
          <Food2forkAPITest ingredients={this.state.ingredients} />
        </div>
      );
    }
    // return (
    //   // <div>
    //   // <Food2forkAPITest ingredients={this.state.ingredients} />
    //   // </div>
    //   );
    }


}

export default Main;
