import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import Food2forkAPITest from '../components/food2forkAPITest.js';
import SignIn from '../components/SignIn.js';


class Main extends React.Component {
  render()
  {
     return (
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
             <div>
                  <input className="allCheckboxes" type="checkbox" value="Milk" /> Milk <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Eggs" /> Eggs <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Bread" /> Bread <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Ketchup" /> Ketchup <br></br>
                   <input className="allCheckboxes" type="checkbox" value="Sugar" /> Sugar <br></br>
                   <br></br>
                   <button type="button" className="btn btn-info" onClick={testfunction}>Submit</button>
              </div>
           </div>
           <div className="col">
             <div id="Recipe">
             <Food2forkAPITest ingredients={checkedValues}/>
             </div>
           </div>
         </div>
       </div>
     </div>
     );
  }
}
var checkedValues = [];

function testfunction(){
    var recipeEdit = document.getElementById("Recipe");


    var inputElements = document.getElementsByClassName("allCheckboxes");

    for(var i =0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        checkedValues.push(inputElements[i].value);
      }
    }
    console.log(checkedValues);
  //  recipeEdit.innerHTML = "Test";
  }

export default Main;
