export function createDropdown(list,id){
  let dropdown = ''
  list.forEach(item => {
    const template =
    `<p class="card-text" id="item-${item.replaceAll(' ','')}" onclick="setValue(${item.replaceAll(' ','-')})">${item} </p>`
    dropdown += template
    document.getElementById(id).innerHTML = dropdown
  })
}
export function setValue(val){
  console.log('newVal : ',val)
  // console.log(document.getElementById("item-" + val.replaceAll(' ','')).value)
  // document.getElementById("item-" + val).value = val
}