import {recipes} from '../data/Data.js'
import { createTemplate } from '../Models/template.js'
import { filters } from '../data/Filters.js'
export const searchInput = (filters) => {
  if(filters.global || filters.ingredient || filters.ustensil || filters.appliance){
    let result = recipes

  // filtre appliance
    for (let i = 0; i < result.length; i++) {
      result[i].ustensilList = ''
      for (let j = 0; j < result[i].ustensils.length; j++) {
        result[i].ustensilList += result[i].ustensils[j].toLowerCase()
      }
    }
    for (let i = 0; i < result.length; i++ ) {
      result[i].listOfIngredients = []
      for(let j = 0; j < result[i].ingredients.length; j++) {
        result[i].listOfIngredients += result[i].ingredients[j].ingredient
      }
    }
    for (let i = 0; i < result.length; i++) {
      result[i].nameAndDescription = result[i].name.toLowerCase() + ' ' + result[i].description.toLowerCase()
    }

    console.log('result after for loop initiating fields',result)
    if (filters.appliance) {
      let applianceArr = []
      for (let i = 0; i < result.length; i++) {
          if(result[i].appliance.toLowerCase().includes(filters.appliance.toLowerCase())){
            applianceArr.push(result[i])
          }
        }
        result = applianceArr
      }
    console.log('result after filter appliance : ', result)

      // filtre ustensil

    if ( filters.ustensil) {
      let ustensilArr = []
      for (let i = 0; i < result.length; i++) {
          if ( result[i].ustensilList.includes(filters.ustensil) ) {
            ustensilArr.push(result[i])
        }
      }
      result = ustensilArr
    }
    console.log('result after filtering ustensils : ', result)


    // filtre global
    if(filters.global) {
      let globalArr = []
      for (let i = 0; i < result.length; i++) {
        if ( result[i].nameAndDescription.includes(filters.global) ) {
          globalArr.push(result[i])
        }
      }
      result = globalArr
    }
    console.log('result filtered after global', result)

    // filtre ingredient
    if (filters.ingredient) {
      let ingredientArr = []
      for (let i = 0; i < result.length; i++) {
        if (result[i].listOfIngredients.toLowerCase().includes(filters.ingredient.toLowerCase())) {
          ingredientArr.push(result[i])
        }
      }
      result = ingredientArr
    }

  console.log('final result',result)
  return result
  } else{ return recipes }
}
const inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener('change', function(event){
  filters.global = inputSearch.value
  createTemplate(filters)
})
