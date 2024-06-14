let unOrderListItemsContainer = document.getElementById('unOrderListItemsContainer');
let itemList = [{
    itemName: "veg Biryani", 
    uniqueNo: 1,
},
    {
        itemName: "chicken 65", 
        uniqueNo: 2,
    },
    {
        itemName: "paratha", 
        uniqueNo: 3,
    }];
function removeOrder(listId){
    let listElement = document.getElementById(listId);
    unOrderListItemsContainer.removeChild(listElement);

} 
function onAddItemsToOrder(item){
    let buttonId = 'button' + item.uniqueNo;
    let listId = 'item' + item.uniqueNo;
    let listcontainer = document.createElement('li');
    listcontainer.id = listId;
    listcontainer.classList.add('list-Item', 'd-flex', 'flex-row');
    listcontainer.textContent = item.itemName;
    unOrderListItemsContainer.appendChild(listcontainer);
    let buttonElement = document.createElement('button');
    buttonElement.id = buttonId;
    buttonElement.textContent = 'cancel';
    buttonElement.classList.add('button', 'btn', 'btn-danger');
    buttonElement.onclick = function(){
        removeOrder(listId);
    } 
    listcontainer.appendChild(buttonElement);
}
for(let item of itemList){
    onAddItemsToOrder(item);
}