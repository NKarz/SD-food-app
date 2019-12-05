//importing React
//importing bootstrap
//importing API Food2fork  ---------------> CHANGING API TO EDAMAM
import React from 'react';
import Bootstrap from '../bootstrap/css/bootstrap.css';
import Food2forkAPITest from '../components/food2forkAPITest.js';

// this will sort the recipes by the user selection "checkbox"
// this should also sort the shortest amount of time it takes to cook the meal.
/*
getRecipes(){
  var base_url;
  base_url = 'https://api.edamam.com/search?q=' + this.props.ingredients + "&app_id=" + app_id + "&app_key=" + app_key;



   */
/**/
   //create function to call list of ingredients

   function Recipe(props){
       const selectedStaples = props.selectedStaples;
       const recipeList = props.cookbook.recipes

       const listItems = recipeList.map((recipe) => {
           const hasStaple = ingredient_list.reduce(
               (_hasStaple, staple) => _hasStaple || selectedStaples.includes(staple),
               false
           );

           // only show recipe if it has a staple
           if (selectedStaples.length === 0 || hasStaple)
               return (
                   <div key={recipe.id}>
                       <h2>{recipe.name}</h2>
                       <IngredientDetailList ingredientList = {recipe.ingredient_list}/>
                   </div>
               );
           }

           return null;
       }

       );
       return(

           <div>{listItems}</div>
       )
   }

   class Filter extends React.Component {
       constructor(){
           super();
           this.state = {
               checkedStaples: {},
           }
       }

       render(){
           const stapleList = this.props.stapleList;
           const allCheckboxes = stapleList.map((staple, index) =>
               <div key = {index}>
               <label>
                   <input
                       type="allCheckboxes"
                       value="{staple}"
                       onClick={e => this.props.onChange(staple, e.checked)}
                   />
                   {staple}
               </label>
               </div>
           );
           return (
               <form>
                   {allCheckboxes}
               </form>
           );
       }
   }


   class Cookbook extends React.Component {
       constructor(){
           super();
           this.state ={
               cookbook: data,
               selectedStaples: []
           }
       }

       getStapleList(recipes){
           let stapleList = [];
           recipes.forEach(function(recipe){
               recipe.ingredient_list.forEach(function(list){
                   stapleList.push(list.needed_staple);
               });
           });

           let flattenedStapleList = stapleList.reduce(function(a,b){
               return a.concat(b);
           })

           return flattenedStapleList
       }

       handleOnChange(staple, isChecked) {
           const selectedStaples = this.state.selectedStaples;
           if (isChecked) {
               this.setState({
                   selectedStaples: selectedStaples.push(staple);
               })
           } else {
               this.setState({
                   selectedStaples: selectedStaples.filter(selectedStaple => selectedStaple !== staple);
               })
           }
       }

       render(){
           const selectedStaples = this.state.selectedStaples;
           const cookbook = this.state.cookbook;
           const stapleList = this.getStapleList(cookbook.recipes);
           return(
               <div className="cookbook">
                   <div className="filter-section">
                       <h1>This is the filter section</h1>
                       <Filter stapleList = {stapleList} onChange={this.handleOnChange.bind(this)}/>
                   </div>
                   <div className="recipes">
                       <h1>This is where the recipes go</h1>
                       <div className="recipe">
                           <Recipe cookbook = {cookbook} selectedStaples={selectedStaples} />
                       </div>
                   </div>
               </div>
           );
       }
   }

   ReactDOM.render(
     <Cookbook />,
     document.getElementById('root')
   );
