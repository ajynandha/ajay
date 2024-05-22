let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageJs = document.getElementById("warningMessage");
let maximumJs = 300;
let minimumJs = 100;
let imageWidth = 200;
imageElement.style.width = imageWidth + "px";
imageWidthElement.textContent = imageWidth + "px";

function incrementPlus() {
    if (imageWidth >= maximumJs) {
        warningMessage.textContent = "Too big. Decrease the size of the Image.";
    } else {
        imageWidth = imageWidth + 5;
        let imagesUpadate = imageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = imagesUpadate;
        imageWidthElement.textContent = imagesUpadate;
    }
}

function decrementMinus() {
    if (imageWidth <= minimumJs) {
        warningMessage.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        imageWidth = imageWidth - 5;
        let imagesUpadate = imageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = imagesUpadate;
        imageWidthElement.textContent = imagesUpadate;
    }
}