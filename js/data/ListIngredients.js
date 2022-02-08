import { recipes } from "./Data.js"
import { createListOfIngredient } from '../Models/listsDropdown.js'

export const getListOfIngredients = () => {
  let listOfIngredients = []
  recipes.map(recipe => {
    recipe.ingredients.map(ingredient => {
      if(!listOfIngredients.includes(ingredient.ingredient.toLowerCase())){
        listOfIngredients.push(ingredient.ingredient.toLowerCase())
      }
    })
  })
  return listOfIngredients
}

console.log(getListOfIngredients())

const inputIngredient = document.getElementById("input-ingredient")
inputIngredient.addEventListener('keyup', function(){
  createListOfIngredient(inputIngredient.value)
})