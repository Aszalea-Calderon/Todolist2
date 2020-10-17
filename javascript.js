const addButton = document.querySelector('.add');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

if (window.localStorage.getItem("todos")== undefined){
  var todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item{
  constructor(name){
    //Create the item div
    this.createDiv(name);
  }
  createDiv(name){
    var itemBox= document.createElement('div');
    itemBox.classList.add('item');

    var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    Let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    Let editButton = document.createElement('button');//This is different
    editButton.classList.add('editButton');

    Let removeButton = document.createElement('button');//This is different
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

  }

}
new item("sport");