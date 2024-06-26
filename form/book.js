let bookmarkFormJs = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");

let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

let bookmarksList = document.getElementById("bookmarksList");


let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];
let counter = bookmarks.length;
console.log(counter)


siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "required*"
    } else {
        siteNameErrMsg.textContent = "";
    }
})
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "required*"
    } else {
        siteUrlErrMsg.textContent = "";
    }
})

function validateFormData() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
}

function sumbitButtonClicked(resultSubmit) {
    let createLiElement = document.createElement("li");
    bookmarksList.appendChild(createLiElement);

    let divContainerElement = document.createElement("div");
    divContainerElement.classList.add("white-lables");
    createLiElement.appendChild(divContainerElement);

    let paragraphElement = document.createElement("p");
    paragraphElement.classList.add("label-paragraph");
    paragraphElement.textContent = resultSubmit.name;
    divContainerElement.appendChild(paragraphElement);

    let anchorElement = document.createElement("a");
    anchorElement.href = resultSubmit.url;
    anchorElement.target = "_blank";
    divContainerElement.appendChild(anchorElement);

    let buttonCreateElement = document.createElement("button");
    buttonCreateElement.classList.add("btn", "btn-primary");
    buttonCreateElement.textContent = "Visit";
    anchorElement.appendChild(buttonCreateElement);

}

for (let resultSubmit of bookmarks) {
    sumbitButtonClicked(resultSubmit)
}

function onClicked() {
    counter = counter + 1;
    let newResult = {
        bookmarkId: "bookmark" + counter,
        name: siteNameInput.value,
        url: siteUrlInput.value
    }
    sumbitButtonClicked(newResult);
}

bookmarkFormJs.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData();
    onClicked();
    sumbitButtonClicked(resultSubmit);

})