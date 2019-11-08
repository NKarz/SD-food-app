import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import ListOfIngredients from '../components/ListOfIngredients.js';
import Food2forkAPITest from '../components/food2forkAPITest.js';

class Main extends React.Component {



  render()
  {
    return (
      <div>
  <ListOfIngredients />
  <Food2forkAPITest />
    </div>
    );
  }
}
export default Main;
