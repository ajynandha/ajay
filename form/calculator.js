let first = document.getElementById("firstnumber");
let second = document.getElementById("secondnumber");
let user = document.getElementById("userInput3");
let game = document.getElementById("gameResult");
function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    first.textContent = firstRandomNumber;
    second.textContent = secondRandomNumber;
    game.textContent = "";
    user.value = "";
}
function checkResult() {
    let isEqualTo = parseInt(first.textContent) + parseInt(second.textContent);
    let userInputNumber = parseInt(user.value);
    if(userInputNumber === "") {
        game.textContent = "Please Try Again";
        game.style.backgroundColor = "#1E217C";
    }
    else if(userInputNumber === isEqualTo) {
        game.textContent = "Congrats!You got it right";
        game.style.backgroundColor = "#028A0F";
    }
    else{
        game.textContent = "Please Try Again";
        game.style.backgroundColor = "#1E217C";
    }
}






