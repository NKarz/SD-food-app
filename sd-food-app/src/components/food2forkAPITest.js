import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';



class Food2forkAPITest extends React.Component {
  constructor(props){
    super(props);
    this.state={recipes: []};
  }

  render()
  {
    return (
      <div>
      this is a test
      </div>
    );
  }
}

function getRecipes(){
  var api_key = '51851afa92a60432329217d5876bdf01';
  var base_url;


  base_url = 'https://www.food2fork.com/api/search?key=' + api_key + '&q=' + 'chicken';

  fetch(base_url)
   .then((response) => {
     return response.json();
   })
   .then((data) => {
     this.setState({
       recipes: data.recipes
   });
   console.log(data);
   })
}






export default Food2forkAPITest;
