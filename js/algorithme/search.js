import {recipes} from '../data/Data.js'
import { createTemplate } from '../Models/template.js'
import { filters } from '../data/Filters.js'
export const searchInput = (filters) => {
  console.log(filters)
  if(filters.appliance){
    console.log('appliance')
    return recipes
    .filter(item => {
      return item.appliance.includes(filters.appliance)
    })
  }
  if(filters.ustensil){
    console.log('ustensil')
    return recipes
    .filter(item => {
      return item.ustensils.includes(filters.ustensil)
    })
  }
  if(filters.global){
    console.log('global')
    return recipes
    .map( item => {
      item.listOfIngredients = item.ingredients.map (i => i.ingredient)
      return item
    })
    .map (item => {
      item.nameAndDescription = item.name.toLowerCase() + " " + item.description.toLowerCase()
      return item
    })
    .filter (item => {
      return item.nameAndDescription.includes(filters.global.toLowerCase())
    })
  }
  if(filters.ingredient){
    console.log('ingredient')
    return recipes
    .filter(item => {
      item.listOfIngredients.includes(filters.ingredient)
    })
  } else {
    return recipes
  }
}
const inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener('keyup', function(event){
  filters.global = inputSearch.value
  console.log(filters)
  createTemplate(filters)
})