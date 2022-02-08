import {recipes} from '../data/Data.js'
import { createTemplate } from '../Models/template.js'
export const searchInput = (filter) => {
  let filteredData = []
  recipes.filter(item => {
    const listOfIngredients = []
    item.ingredients.map(ingredient => {
      listOfIngredients.push(ingredient.ingredient)
    })
    if(item.name.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())){
      filteredData.push(item)
    } else if (filter !== 'default'){
     listOfIngredients.map(ingredient => {
       if(ingredient.includes(filter)){
         filteredData.push(item)
       }
     })
    } else{
      filteredData = recipes
    }
  })
  return filteredData
}
const inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener('keyup', function(event){
  createTemplate(inputSearch.value)
})