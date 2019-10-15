import React from 'react';
import Axios from 'axios';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import Request from 'superagent';

class FoodRequest extends React.Component {
state = {
  url : "https://www.food2fork.com/api/search?key=9778ac691e488b0266caebe56fe0a3d5&q=chicken%20breast&page=2",
    recipes : []
}
 async getRecipe(){
  const data = await  fetch(this.state.url);
  const jsonData =  await data.json();
  console.log(jsonData);
}


  render()
  {
    return(
      <div>

      <button onClick={this.getRecipe()}>Click me</button>
      </div>

    );

  }


}
export default FoodRequest;
