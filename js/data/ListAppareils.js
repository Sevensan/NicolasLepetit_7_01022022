import { recipes } from "./Data.js"

export const getListOfAppliance = () => {
  let listOfAppliance = []
  recipes.map(recipe => {
    if(!listOfAppliance.includes(recipe.appliance.toLowerCase())){
      listOfAppliance.push(recipe.appliance.toLowerCase())
    }
  })
  return listOfAppliance
}
console.log(getListOfAppliance())