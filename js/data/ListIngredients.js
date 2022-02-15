import { recipes } from "./Data.js"
import {createDropdown} from '../Models/listsDropdown.js'
import { createTemplate } from "../Models/template.js"
import {filters} from '../data/Filters.js'
export const getListOfIngredients = (filter) => {
  if(!filter){
    filter = ''
  }
  let listOfIngredients = []
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      // si la liste contient déjà l'ingrédient, on n'ajoute pas l'ingrédient à la liste
      if(!listOfIngredients.includes(ingredient.ingredient.toLowerCase())){
        if(ingredient.ingredient.toLowerCase().includes(filter)){
          listOfIngredients.push(ingredient.ingredient.toLowerCase())
        }
      }
    })
  })
  return listOfIngredients
}
const inputIngredient = document.getElementById("input-ingredient")
inputIngredient.addEventListener('keyup', function(){
  createDropdown(getListOfIngredients(inputIngredient.value), 'listIngredients')
  filters.ingredient = inputIngredient.value
  console.log(filters)
  createTemplate(filters)
})