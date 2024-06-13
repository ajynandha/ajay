let listItemsContainerElement = document.getElementById('listItemsContainer');
let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
]; 
function onCheckboxStatus(checkboxId, LabelsId){

    let checkboxElement = document.getElementById(checkboxId);
    let checkboxLabelElement = document.getElementById(LabelsId);
    checkboxLabelElement.classList.add('checked');
}
function onAppendItems(item){
    let checkboxId = 'checkbox' //+ item.skillName;
    let LabelId = 'label' //+ item.skillName;
   let listItemElement = document.createElement('li');
    listItemElement.classList.add('list-item',  'd-flex','flex-row');
    listItemsContainerElement.appendChild(listItemElement);
    let inputElement = document.createElement('input');
    inputElement.id = checkboxId;
    inputElement.type = 'checkbox';
    inputElement.classList.add('checkbox-input',);
    inputElement.onclick = function(){
        onCheckboxStatus(checkboxId,LabelsId);
    };
    listItemElement.appendChild(inputElement);
    let labelContainer = document.createElement('div');
    labelContainer.classList.add( "d-flex", "flex-row");
   listItemElement.appendChild(labelContainer);
    let labelElement = document.createElement('label');
    labelElement.id = LabelId;
    labelElement.setAttribute('for', checkboxId);
    labelElement.textContent = item.skillName;
    labelElement.classList.add('checkbox-label',);
    labelContainer.appendChild(labelElement);
}
for(let item of skillList){
    onAppendItems(item);
}