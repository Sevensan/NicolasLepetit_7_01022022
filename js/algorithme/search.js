import {recipes} from '../data/Data.js'
import { createTemplate } from '../Models/template.js'
import { filters } from '../data/Filters.js'
export const searchInput = (filters) => {
  if(filters.global || filters.ingredient || filters.ustensil || filters.appliance){
    return recipes
    .filter(item => filters.appliance ? item.appliance.toLowerCase().includes(filters.appliance.toLowerCase()) : item)
    .map(item => {
      item.reduceUstensils = item.ustensils
      .reduce((total, i)=> total + i.toLowerCase(),'')
      return item
    })
    .filter(item => filters.ustensil ? item.reduceUstensils.includes(filters.ustensil) : item)
    .map( item => {
      item.listOfIngredients = item.ingredients
      .map (i => i.ingredient)
      return item
    })
    .map (item => {
      item.nameAndDescription = item.name.toLowerCase() + " " + item.description.toLowerCase()
      return item
    })
    .filter (item => filters.global ? item.nameAndDescription.includes(filters.global) : item)
    .map(item => {
      item.reducelist = item.listOfIngredients
      .reduce((total, i)=> total + i.toLowerCase(),'')
      return item
    })
    .filter(item => filters.ingredient ? item.reducelist.includes(filters.ingredient) : item)
  } else{ return recipes }
}
const inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener('keyup', function(event){
  filters.global = inputSearch.value
  createTemplate(filters)
})