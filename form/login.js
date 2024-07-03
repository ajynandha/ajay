let username = document.forms['form']['username'];
let password = document.forms['form']['password'];

function validated() {
    let username = document.forms['form']['username'].value;
    let password = document.forms['form']['password'].value;
    if (username.length >=4 && password.length >=4 ) {
         window.location.href = "http://127.0.0.1:5500/htmlCssJs/Grocery-list.html"

    
     } else{
        alert("Enter username and password maximum 4 characters ")

    }}

