export function createDropdown(list,id){
  list.forEach(item => {
    document.getElementById(id).innerHTML +=
    `<p class="CLIQUEMOIDESSUS card-text" id="item-${item.replaceAll(' ','-')}">${item}</p>`
  })
}
export const setNewValue = (val, id) => {
  console.log(val, id)
  val = val.replaceAll('-',' ')
  if(id.includes('gredient')){
    document.getElementById('input-ingredient').value = val
  }
  if(id.includes('stensil')){
    document.getElementById('input-ustensil').value = val
  }
  if(id.includes('pareil')){
    document.getElementById('input-appliance').value = val
  }
}