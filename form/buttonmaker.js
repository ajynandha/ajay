let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");
function applyBtn() {
    let bgColorInputValue = bgColorInputElement.value;
    let fontColorInputValue = fontColorInputElement.value;
    let fontSizeInputValue = fontSizeInputElement.value;
    let fontWeightInputValue = fontWeightInputElement.value;
    let paddingInputValue = paddingInputElement.value;
    let borderRadiusInputValue = borderRadiusInputElement.value;
    customButtonElement.style.backgroundColor = bgColorInputValue;
    customButtonElement.style.color = fontColorInputValue;
    customButtonElement.style.fontSize = fontSizeInputValue;
    customButtonElement.style.fontWeight = fontWeightInputValue;
    customButtonElement.style.padding = paddingInputValue;
    customButtonElement.style.borderRadius = borderRadiusInputValue;
}






