import { recipes } from "./Data.js"
import {createDropdown, setNewValue} from '../Models/listsDropdown.js'
import { createTemplate } from "../Models/template.js"
import {filters} from '../data/Filters.js'
let isOpen = false
export const getListOfIngredients = (filter) => {
  !filter ? filter = '' : filter
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
  return listOfIngredients.filter(item => item.includes(filter))
}
const inputIngredient = document.getElementById("input-ingredient")
const arrow = document.getElementById("arrowIngredient")

const createIngredients = (filter) => {
  filters.ingredient = filter
  const listIngredients = document.getElementById('listIngredients')
  !isOpen ? listIngredients.classList.add("visible") : listIngredients.classList.remove(("visible"))
  createDropdown(getListOfIngredients(filter), 'listIngredients')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-ingredient")
  filtre.innerHTML = filter
  const list =
  document.querySelectorAll("#listIngredients .showlist")
  for(let i = 0; i <list.length; i++){
    list[i].addEventListener('click', ()=>{
      setNewValue(`${list[i].innerHTML}`, 'ingredient')
      createIngredients(inputIngredient.value)
      isOpen = !isOpen
    })
  }
}
inputIngredient.addEventListener('change',()=>{
  createIngredients(inputIngredient.value)
  isOpen = !isOpen
 })
inputIngredient.addEventListener('keyup',()=>{
 isOpen = false
 createIngredients(inputIngredient.value)
})
arrow.addEventListener('click', ()=>{
 createIngredients(inputIngredient.value)
 isOpen = !isOpen
})