let divContainerElement = document.getElementById('checkboxWithLabelContainer');
divContainerElement.classList.add('divContainer');

let inputElement = document.createElement('input');
inputElement.type = 'checkbox';
inputElement.id = 'checkbox';
inputElement.classList.add('checkbox');
divContainerElement.appendChild(inputElement);
let labelElement = document.createElement('label');
labelElement.getAttribute('for', 'checkbox');
labelElement.id = 'checkboxLabel';
labelElement.textContent = 'Click Me!';
labelElement.classList.add('labelItems');
divContainerElement.appendChild(labelElement);