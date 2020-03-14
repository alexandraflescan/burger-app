import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(
        igKey => {
            console.log('igKey is: ' + igKey)
        return [...Array(props.ingredients[igKey])].map((j, i) => {
            console.log('i in map is: '+ i)
           return <BurgerIngredient key={igKey + i} type={igKey}/>
        });

    });
// for ingredient in transformedIngredients:
//     numarul_de_straturi = props.ingredients[igKey])
//     array = [] 
return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {/* <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/> */}
         {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>

       
    </div>
);
}

export default burger;