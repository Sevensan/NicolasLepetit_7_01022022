import { recipes } from "./Data.js"

export const getListOfUstensils = () => {
  let listOfUstensils = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      if(!listOfUstensils.includes(ustensil.toLowerCase())){
        listOfUstensils.push(ustensil.toLowerCase())
      }
    })
  })
  return listOfUstensils
}

console.log(getListOfUstensils())