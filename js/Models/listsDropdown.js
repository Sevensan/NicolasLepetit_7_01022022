export function createDropdown(list,id){
  let sectionDropdown = ''
  list.forEach(item => {
    const template =
    `<p class="CLIQUEMOIDESSUS card-text" id="item-${item.replaceAll(' ','-')}">${item}</p>`
    sectionDropdown += template
    document.getElementById(id).innerHTML = sectionDropdown
  })
}
export const setNewValue = (val, id) => {
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