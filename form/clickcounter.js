let counter = document.getElementById("counterValue");
let click = localStorage.getItem("incrementBtn");
if(click === null){
    counter.textContent = 0;
}
else{ 
counter.textContent = click;
}

function oncount(){
    let previous = counter.textContent;
    let update = parseInt(previous) + 1;
   // localStorage.setItem("click", update);
    counter.textContent = update;
};