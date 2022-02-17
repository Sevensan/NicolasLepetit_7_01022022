import { Recette } from '../factories/Recette.js'
import { searchInput } from '../algorithme/search.js'
import { filters } from '../data/Filters.js'
export function createTemplate(filters){
  let sectionRecipes = ''
  console.log(searchInput(filters))
  searchInput(filters).forEach(item => {
    const recette = new Recette(item)
    const template =
    `
  <div class="col-4 card">
    <div class="container">
      <div class="card-img-top">
        <img src="https://via.placeholder.com/150">
      </div>
      <div class="card-body">
        <div class="row">
          <p class="card-title col-8">${recette.name}</p>
          <p class="card-text col-4">${recette.time}</p>
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
}
const checkText = (text) => {
  return text.length > 100 ? text.slice(0,100) + '...' : text
}
createTemplate(filters)