let bgColorsArray = ["red","black","orange","blue","yellow"];
let btnElement = document.getElementById("button");
let containerElement = document.getElementById('bgContainer');
function clickMe(){
    let numberofBgColors = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberofBgColors);
    if (numberofBgColors === randomColorIndex) {
        numberofBgColors = randomColorIndex - 1;
    }
    containerElement.style.backgroundColor = bgColorsArray[randomColorIndex];
} 