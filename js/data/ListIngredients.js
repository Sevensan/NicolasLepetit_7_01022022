import { recipes } from "./Data.js"
import {createDropdown, setNewValue} from '../Models/listsDropdown.js'
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
const arrow = document.getElementById("arrowIngredient")
const createIngredients = () => {
  filters.ingredient = inputIngredient.value
  document.getElementById('listIngredients').classList.toggle("visible")
  createDropdown(getListOfIngredients(inputIngredient.value), 'listIngredients')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-ingredient")
  filtre.innerHTML = inputIngredient.value
  const list =
  document.querySelectorAll("#listIngredients .CLIQUEMOIDESSUS")
  for(let i = 0; i <list.length; i++){
    console.log(list[i])
    list[i].addEventListener('click', ()=>{setNewValue(`${list[i].innerHTML}`, 'ingredient')})
  }
}
inputIngredient.addEventListener('change', createIngredients)
arrow.addEventListener('click', createIngredients)