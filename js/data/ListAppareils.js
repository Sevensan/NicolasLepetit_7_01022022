import { recipes } from "./Data.js"
import {createDropdown, setNewValue} from '../Models/listsDropdown.js'
import { filters } from "./Filters.js"
import { createTemplate } from "../Models/template.js"
let isOpen = false
export const getListOfAppliance = (val) => {
  !val ? val = '' : val
  let listOfAppliance = []
  recipes.forEach( recipe => {
    if(!listOfAppliance.includes(recipe.appliance.toLowerCase())){
      if(recipe.appliance.toLowerCase().includes(val)){
        listOfAppliance.push(recipe.appliance.toLowerCase())
      }
    }
  })
  return listOfAppliance.filter(item => item.includes(val))
}
const inputAppliance = document.getElementById("input-appliance")
const arrow = document.getElementById("arrowAppliance")

const createAppliance = (filter) => {
  filters.appliance = filter
  const listAppliance = document.getElementById('listAppareils')
  !isOpen ? listAppliance.classList.add("visible") : listAppliance.classList.remove(("visible"))
  createDropdown(getListOfAppliance(filter), 'listAppareils')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-appareil")
  filtre.innerHTML = filter
  const list =
  document.querySelectorAll("#listAppareils .showlist")
  for(let i = 0; i <list.length; i++){
    list[i].addEventListener('click', ()=>{
      setNewValue(`${list[i].innerHTML}`, 'appareil')
      createAppliance(inputAppliance.value)
      isOpen = !isOpen
    })
  }
}
inputAppliance.addEventListener('change',()=>{
   createAppliance(inputAppliance.value)
   isOpen = !isOpen
  })
inputAppliance.addEventListener('keyup',()=>{
  isOpen = false
  createAppliance(inputAppliance.value)
})
arrow.addEventListener('click', ()=>{
  createAppliance(inputAppliance.value)
  isOpen = !isOpen
})