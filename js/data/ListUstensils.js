import { recipes } from "./Data.js"
import {createDropdown} from '../Models/listsDropdown.js'
import { filters } from "./Filters.js"
import { createTemplate } from "../Models/template.js"
export const getListOfUstensils = (filter) => {
  let listOfUstensils = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      if(!listOfUstensils.includes(ustensil.toLowerCase())){
        if(ustensil.toLowerCase().includes(filter)){
          listOfUstensils.push(ustensil.toLowerCase())
        }
      }
    })
  })
  return listOfUstensils
}
const inputUstensils = document.getElementById("input-ustensil")
const arrow = document.getElementById("arrowUstensil")
const createUstensil = () => {
  filters.ustensil = inputUstensils.value
  document.getElementById('listUstensils').classList.toggle("visible")
  createDropdown(getListOfUstensils(inputUstensils.value), 'listUstensils')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-ustensil")
  filtre.innerHTML = inputUstensils.value
}
inputUstensils.addEventListener('change', createUstensil)
arrow.addEventListener('click', createUstensil)