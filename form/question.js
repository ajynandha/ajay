let submitBtn = document.getElementById("submitBtn");

let capitalCity = "Delhi";
let selectedCity = null;
//to change the selected city status
let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
cityHyderabad.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityChennai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityDelhi.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityMumbai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

//to prevent the default action 
let resultMsg = document.getElementById("resultMsg");
let questionsForm = document.getElementById("questionsForm");
questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //validation of correct answer 
    if (selectedCity === null) {
        resultMsg.textContent = "Please select a city !";
        resultMsg.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsg.textContent = "Correct Answer";
        resultMsg.style.color = "#2b9a40";
    } else {
        resultMsg.textContent = "Wrong Answer !"
        resultMsg.style.color = "#dc3545";
    }
});