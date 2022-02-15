import { recipes } from "./Data.js"
import {createDropdown} from '../Models/listsDropdown.js'
import { filters } from "./Filters.js"
import { createTemplate } from "../Models/template.js"
export const getListOfAppliance = (filter) => {
  if(!filter){
    filter = ''
  }
  let listOfAppliance = []
  recipes.map(recipe => {
    if(!listOfAppliance.includes(recipe.appliance.toLowerCase())){
      if(recipe.appliance.toLocaleLowerCase().includes(filter)){
        listOfAppliance.push(recipe.appliance.toLowerCase())
      }
    }
  })
  return listOfAppliance
}
const inputAppliance = document.getElementById("input-appliance")
inputAppliance.addEventListener('keyup', function(){
  createDropdown(getListOfAppliance(inputAppliance.value), 'listAppareils')
  filters.appliance = inputAppliance.value
  console.log(filters)
  createTemplate(filters)
})