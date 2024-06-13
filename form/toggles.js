let checkBoxWithLabelContainer = document.getElementById('checkBoxWithLabelContainer');
function oncheckbox() {
    let checkboxInputElement = document.getElementById('checkbox');
    let checkboxLabelElement = document.getElementById('checkboxLabel');
    checkboxLabelElement.classList.toggle('checked');   
} 
let inputElement = document.createElement('input');
inputElement.type = 'checkbox';
inputElement.id = 'checkbox';
inputElement.classList.add('input-checkbox');

inputElement.onclick = function(){
    oncheckbox('checkbox', 'checkboxLabel');
}
checkBoxWithLabelContainer.appendChild(inputElement);
let labelElement = document.createElement('label');
labelElement.id = 'checkboxLabel';
labelElement.setAttribute('for', 'checkbox');
labelElement.classList.add('checkbox-label');
labelElement.textContent = 'I am a lable';
checkBoxWithLabelContainer.appendChild(labelElement);
