export function createDropdown(list,id){
  list.forEach(item => {
    document.getElementById(id).innerHTML +=
    `<p class="card-text ILFAUTCLIQUEROOOOH" id="item-${item.replaceAll(' ','')}" onclick="setNewValue(${item})">${item}</p>`
  })
}