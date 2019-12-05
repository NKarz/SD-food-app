import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import Food2forkAPITest from '../components/food2forkAPITest.js';
import SignIn from '../components/SignIn.js';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import html2canvas from 'html2canvas';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import "./Main.css";
const auth = firebase.auth();
const db = firebase.firestore();

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
     <button type="button" className="btn btn-info" onClick={signOut} id="logOutButton" >Sign out</button>
     <Link to="/"><button type="button" className="btn btn-info" id="logInButton" >Sign In</button></Link>

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
                   <input className="allCheckboxes" type="checkbox" value="Chicken" /> Chicken <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Shrimp" /> Shrimp <br></br> <br></br>
                   <input type="button" value="+ Add Additional Items" onclick="add(document.forms[0].element.value)"/>  <br></br>

              </div>
              <br></br>
              <button type="button" className="btn btn-info" onClick={() => this.testfunction()}>Submit</button>
              <br></br><br></br>

              <button type="button" className="btn btn-info" id="screenshotbutton" onClick={(takeScreenShot)}>Screenshot</button>

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
    this.state.ingredients = [];

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
function signOut(){
  auth.signOut().then(() => {
    console.log('user signed out');
  })
}
function takeScreenShot(){
  html2canvas(document.getElementById("contents")).then (function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=1900;
            tempcanvas.height=1000;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,0,0, 1900,1000);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        });
}
auth.onAuthStateChanged(user => {
  console.log(user)
  if(user){
    document.getElementById("logInButton").style.display="none";
  }else{
    document.getElementById("logOutButton").style.display="none";
    document.getElementById("screenshotbutton").style.display="none";
    document.getElementById("logInButton").style.display="block";
  }
})
export default Main;
