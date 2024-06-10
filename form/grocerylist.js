let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolate", "Pasta"];
let groceryListContainer = document.getElementById('groceryListContainer');
groceryListContainer.classList.add('bg-container');
let headingElement = document.createElement('h1');
headingElement.textContent = 'Grocery List';
headingElement.classList.add('heading');
groceryListContainer.appendChild(headingElement);
let unorderedListContainer = document.createElement('ul');
unorderedListContainer.classList.add('unOrderedListContainer');
groceryListContainer.appendChild(unorderedListContainer);
function appendItems(item){
    let listItemElement = document.createElement('li');
    listItemElement.textContent = item;
    listItemElement.classList.add('listItems');
    unorderedListContainer.appendChild(listItemElement);
}
for(let item of groceryList){
    appendItems(item);
}