import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';

class Food2forkAPITest extends React.Component {
  constructor(props){
    super(props);
    this.state={recipes: [],
      ingredients: []
    };
  }

  render()
  {
    return (
      <div className="App">
        <div>
              <button onClick={() => this.getRecipes()}>Show recipes</button>
              {console.log("Ingredients?" +  this.props.ingredients)}
        </div>

        <div>
          {this.state.recipes.map(res => <div> <h2><a href={res.source_url}> {res.title} </a> </h2> <img src={res.image_url}/> </div>)}

        </div>
      </div>
    );
  }
   getRecipes(){
  var api_key = '51851afa92a60432329217d5876bdf01';
  var base_url;

  base_url = 'https://www.food2fork.com/api/search?key=' + api_key + '&q=' + 'milk, eggs';

  fetch(base_url)
   .then((response) => {
     return response.json();
   })
   .then(data => {
     this.setState({
       recipes: data.recipes
   });
   console.log("DATA " + data);
   })
}
}

export default Food2forkAPITest;
