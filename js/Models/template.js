import { Recette } from '../factories/Recette.js'
import { recipes } from '../data/Data.js'
export function createTemplate(){
  recipes.map(item => {
    const recette = new Recette(item)
    const template =
    `<div class="container">
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
            ${recette.ingredients.map(item => {
              return `<p class="card-text">${item.ingredient}: ${item.quantity}${item.unit? item.unit : ''}</p>`
              }).join('')}
          </div>
          <p class="col-6">${checkText(recette.description)}</p>
        </div>
      </div>
    </div>`
    recette.$wrapper.classList.add('card')
    recette.$wrapper.classList.add('col-4')
    recette.$wrapper.innerHTML = template
    document.getElementById('recettes').appendChild(recette.$wrapper)
  })
}
 const checkText = (text) => {
  console.log(text.length)
  const newText = null
  if(text.length > 100){
    let newText = text.slice(0,100) + '...'
    return newText
  } else{
    return text
  }
}
console.log(document.getElementById('$0'))
createTemplate()