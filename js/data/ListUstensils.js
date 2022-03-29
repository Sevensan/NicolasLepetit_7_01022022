import { recipes } from "./Data.js"
import {createDropdown, setNewValue} from '../Models/listsDropdown.js'
import { filters } from "./Filters.js"
import { createTemplate } from "../Models/template.js"
let isOpen = false
export const getListOfUstensils = (filter) => {
  !filter ? filter = '' : filter
  let listOfUstensils = []
  recipes.forEach(recipe => {
    recipe.ustensils.forEach(ustensil => {
      if(!listOfUstensils.includes(ustensil.toLowerCase())){
        if(ustensil.toLowerCase().includes(filter)){
          listOfUstensils.push(ustensil.toLowerCase())
        }
      }
    })
  })
  return listOfUstensils.filter(item => item.includes(filter))
}
const inputUstensils = document.getElementById("input-ustensil")
const arrow = document.getElementById("arrowUstensil")

const createUstensil = (filter) => {
  filters.ustensil = filter
  const listUstensils = document.getElementById('listUstensils')
  !isOpen ? listUstensils.classList.add("visible") : listUstensils.classList.remove(("visible"))
  createDropdown(getListOfUstensils(filter), 'listUstensils')
  createTemplate(filters)
  const filtre = document.getElementById("filtres-ustensil")
  filtre.innerHTML = filter
  const list =
  document.querySelectorAll("#listUstensils .CLIQUEMOIDESSUS")
  for(let i = 0; i <list.length; i++){
    list[i].addEventListener('click', ()=>{
      setNewValue(`${list[i].innerHTML}`, 'ustensil')
      createUstensil(inputUstensils.value)
      isOpen = !isOpen
    })
  }
}
inputUstensils.addEventListener('change',()=>{
  createUstensil(inputUstensils.value)
  isOpen = !isOpen
 })
inputUstensils.addEventListener('keyup',()=>{
 isOpen = false
 createUstensil(inputUstensils.value)
})
arrow.addEventListener('click', ()=>{
 createUstensil(inputUstensils.value)
 isOpen = !isOpen
})