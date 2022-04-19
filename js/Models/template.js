import { Recette } from '../factories/Recette.js'
import { searchInput } from '../algorithme/search.js'
import { filters } from '../data/Filters.js'
export function createTemplate(filters){
  let sectionRecipes = ''

  if(searchInput(filters).length > 0){
    searchInput(filters).forEach(item => {
      const recette = new Recette(item)
      const template =
      `
  <div class="col-4 card">
    <div class="container">
      <div class="card-img-top">
        <svg width="380" height="178" viewBox="0 0 380 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5C0 2.23858 2.23858 0 5 0H375C377.761 0 380 2.23858 380 5V178H0V5Z" fill="#C7BEBE"/>
        </svg>
      </div>
      <div class="card-body">
        <div class="row">
          <p class="card-title col-8">${recette.name}</p>
          <p class="card-text col-4"><i class="fa-solid fa-clock"></i> ${recette.time} min</p>
        </div>
        <div class="row">
          <div class="col-6">
            ${recette.ingredients.map(item =>
              `<p class="card-text">${item.ingredient}: ${item.quantity}${item.unit? item.unit : ''}</p>`)
              .join('')}
          </div>
          <p class="col-6">${checkText(recette.description)}</p>
        </div>
      </div>
    </div>
  </div>`
    sectionRecipes += template
    document.getElementById('recettes').innerHTML = sectionRecipes
  })
  } else{
    document.getElementById('recettes').innerHTML = `<p class="pl-3">Aucun résultat</p>`
  }
  const showIt = (elem) => {
    if(elem.classList){
      elem.classList.add("visible")
    }
  }
  const removeIt = (elem) => {
    if(elem.classList){
      elem.classList.remove("visible")
    }
  }
  // ustensils
  const ustensilContainer = document.querySelector('.filtres-ustensil-container')
  const ustensil = document.getElementById("filtres-ustensil")
  //ingredient
  const ingredientContainer = document.querySelector('.filtres-ingredient-container')
  const ingredient = document.getElementById("filtres-ingredient")
  //appareils
  const appareilContainer = document.querySelector('.filtres-appareil-container')
  const appareil = document.getElementById("filtres-appareil")
  // si les filtres sont vides, on ne les affiche pas
  if(filters.ingredient){
    showIt(ingredientContainer)
    showIt(ingredient)
  } else{
    removeIt(ingredient)
    removeIt(ingredientContainer)
  }
  if(filters.ustensil){
    showIt(ustensilContainer)
    showIt(ustensil)
  } else{
    removeIt(ustensil)
    removeIt(ustensilContainer)
  }
  if(filters.appliance){
    showIt(appareilContainer)
    showIt(appareil)
  }
  else{
    removeIt(appareil)
    removeIt(appareilContainer)
  }
}
const checkText = (text) => {
  return text.length > 100 ? text.slice(0,100) + '...' : text
}
createTemplate(filters)
