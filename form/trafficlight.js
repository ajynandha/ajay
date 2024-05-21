let stoplight = document.getElementById("stoplight");
let readylight = document.getElementById("readylight");
let golight = document.getElementById("golight");
let stopbutton = document.getElementById("stopbutton"); 
let readybutton = document.getElementById("readybutton"); 
let gobutton = document.getElementById("gobutton"); 
function onstop(){
    stopbutton.style.backgroundColor = "#cf1124";
    stoplight.style.backgroundColor = "#cf1124";
    readybutton.style.backgroundColor = "#1f1d41";
    readylight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#1f1d41";
    golight.style.backgroundColor = "#4b5069";
} 
function onready(){
    stopbutton.style.backgroundColor = "#1f1d41";
    stoplight.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#f7c948";
    readylight.style.backgroundColor = "#f7c948";
    gobutton.style.backgroundColor = "#1ff1d41";
    golight.style.backgroundColor = "#4b5069";
} 
function ongo(){
    readybutton.style.backgroundColor = "#1f1d41";
    readylight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#1f1d41";
    golight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#199473";
    golight.style.backgroundColor = "#199473";
}

