import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';

class ListOfIngredients extends React.Component {
  render()
  {
    return (
    <div>
      <input className="allCheckboxes" type="checkbox" value="Milk" /> Milk <br></br>
      <input className="allCheckboxes" type="checkbox" value="Eggs" /> Eggs <br></br>
      <input className="allCheckboxes" type="checkbox" value="Bread" /> Bread <br></br>
      <input className="allCheckboxes" type="checkbox" value="Ketchup" /> Ketchup <br></br>
      <input className="allCheckboxes" type="checkbox" value="Sugar" /> Sugar <br></br>
      <br></br>
      <button type="button" className="btn btn-info" onClick={testfunction}>Submit</button>

    </div>
    );
  }
}

/*
gets the element for the Recipe and changes the inner text of the rightmost column to the recipe
*/
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

function findRecipe(){

}
export default ListOfIngredients;
