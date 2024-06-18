let jsonContainer =document.getElementById('jsonContainer');
let bikes =["Hero" , "Honda","Bajaj","Suzuki","Yamaha"];

let person ={
    name : "Rahul", 
    age:25,
    gender:"Male",
};
let todos =[{
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
},
{
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
},
{
    todo: "Asking doubts",
    todoStatus: "Completed",
},
];

let bikesParagraphElement = document.createElement('p');
bikesParagraphElement.classList.add('para');
bikesParagraphElement.textContent = JSON.stringify(bikes);
jsonContainer.appendChild(bikesParagraphElement);


let personParagraphElement = document.createElement('p');
personParagraphElement.classList.add('para');
personParagraphElement.textContent = JSON.stringify(person);
jsonContainer.appendChild(personParagraphElement);


let todosParagraphElement = document.createElement('p');
todosParagraphElement.classList.add('para');
todosParagraphElement.textContent = JSON.stringify(todos);
jsonContainer.appendChild(todosParagraphElement);