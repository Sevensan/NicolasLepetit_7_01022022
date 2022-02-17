export function createDropdown(list,id){
  let dropdown = ''
  list.forEach(item => {
    const template =
    `<p class="card-text">${item} </p>`
    dropdown += template
    document.getElementById(id).innerHTML = dropdown
  })
}