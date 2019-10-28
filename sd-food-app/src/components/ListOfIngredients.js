import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';

class ListOfIngredients extends React.Component {
  render()
  {
    return (
    <div>
      <input class="allCheckboxes" type="checkbox" value="Milk" /> Milk <br></br>
      <input class="allCheckboxes" type="checkbox" value="Eggs" /> Eggs <br></br>
      <input class="allCheckboxes" type="checkbox" value="Bread" /> Bread <br></br>
      <input class="allCheckboxes" type="checkbox" value="Ketchup" /> Ketchup <br></br>
      <input class="allCheckboxes" type="checkbox" value="Sugar" /> Sugar <br></br>
      <br></br>
      <button type="button" class="btn btn-info" onClick={testfunction}>Submit</button>

    </div>
    );
  }

  check(){

  }
  uncheck(){

  }
}

/*
gets the element for the Recipe and changes the inner text of the rightmost column to the recipe
*/
function testfunction(){
    var recipeEdit = document.getElementById("Recipe");

    var checkedValue = null;
    var inputElements = document.getElementsByClassName("allCheckboxes");

    for(var i =0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        checkedValue = inputElements[i].value;
        break;
      }
    }
    console.log(checkedValue);
  //  recipeEdit.innerHTML = "Test";
  }

export default ListOfIngredients;
