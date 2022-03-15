import { filters } from "../data/Filters.js"
import { createTemplate } from "./template.js"

const appareil = document.getElementById("closeAppareilFilter")
const ustensil = document.getElementById("closeUstensilFilter")
const ingredient = document.getElementById("closeIngredientFilter")
export const resetFilter = (filter) => {
  switch(filter){
    case 'ingredient':
      filters.ingredient = null
      document.getElementById("filtres-ingredient").innerHTML = filters.appliance
      document.querySelector(".filtres-ingredient-container").classList.remove("visible")
      document.getElementById("input-ingredient").value = null
      createTemplate(filters)
      break
      case 'appareil':
        filters.appliance = null
        document.getElementById("filtres-appareil").innerHTML = filters.appliance
        document.querySelector(".filtres-appareil-container").classList.remove("visible")
        document.getElementById("input-appliance").value = null
        createTemplate(filters)
        break
        case 'ustensil':
        filters.ustensil = null
        document.getElementById("filtres-ustensil").innerHTML = filters.appliance
        document.querySelector(".filtres-ustensil-container").classList.remove("visible")
        document.getElementById("input-ustensil").value = null
        createTemplate(filters)
        break
  }
}
appareil.addEventListener("click", ()=>{resetFilter('appareil')})
ustensil.addEventListener("click", ()=>{resetFilter('ustensil')})
ingredient.addEventListener("click", ()=>{resetFilter('ingredient')})