import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import './food2forkAPITest.css';


class Food2forkAPITest extends React.Component {
  constructor(props){
    super(props);
    this.state={recipes: []
    };
  }

  render()
  {
    return (
      <div className="listOfRecipes">
        {this.getRecipes(),
        this.state.recipes.map(result =>
          <div><li><a href={result.recipe.url}>{result.recipe.label}</a></li></div>
        )}
        </div>
    );
  }

 getRecipes(){
   var app_id = '131489dd';
   var app_key = '570a130e3713f57617735f17ece1d187';

   var base_url;

   base_url = 'https://api.edamam.com/search?q=' + this.props.ingredients + "&app_id=" + app_id + "&app_key=" + app_key;

   fetch(base_url)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        recipes: data["hits"]
    });
     console.log("DATA " + data);
    })

   //as of November 30th, Food2Fork has expired
  // var api_key = '51851afa92a60432329217d5876bdf01';
  // var base_url;
  //
  // base_url = 'https://www.food2fork.com/api/search?key=' + api_key + '&q=' + this.props.ingredients;
  //
  // fetch(base_url)
  //  .then((response) => {
  //    return response.json();
  //  })
  //  .then(data => {
  //    this.setState({
  //      recipes: data.recipes
  //  });
  //  // console.log("DATA " + data);
  //  })


}
}

export default Food2forkAPITest;
