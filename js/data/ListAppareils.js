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
const arrow = document.getElementById("arrowAppliance")
const createAppliance = () => {
  filters.appliance = inputAppliance.value
  document.getElementById('listAppareils').classList.toggle("visible")
  createDropdown(getListOfAppliance(inputAppliance.value), 'listAppareils')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-appareil")
  filtre.innerHTML = inputAppliance.value
}
inputAppliance.addEventListener('change', createAppliance)
arrow.addEventListener('click', createAppliance)