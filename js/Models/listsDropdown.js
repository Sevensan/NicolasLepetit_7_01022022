export function createDropdown(list,id){
  let dropdown = ''
  console.log(list)
  console.log(Array.isArray(list))
  list.map(item => {
    const template =
    `<p class="card-text">${item} </p>`
    dropdown += template
    document.getElementById(id).innerHTML = dropdown
  })
}