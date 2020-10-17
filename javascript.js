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
    	edit.innerHTML = "Edit";//could be this
      edit.addEventListener('click', () => this.edit(input, name));
      
      var remove = document.createElement('button');
      remove.classList.add('remove');
      remove.innerHTML = "Remove";//this could be it
      remove.addEventListener('click', () => this.remove(itemBox))

      container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);    
  }

  edit(input,name){
    if(input.disabled == true){
      input.disabled = !input.disabled;
    }else{
      input.disabled = !input.disabled;
      let indexof = todos.indexOf(name);
      todos[indexof] = input.value;
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  remove(itemBox, name){
    itemBox.parentNode.removeChild(itemBox);
    let index = todos.indexOf(name);

  }

}
new item("sport");