
function addValue() {
  document.getElementById("title").textContent = "Add To cart";
  document.getElementById("heading").textContent = "My Cart Items";
}
addValue();

function listValue() {
  let input = document.getElementById("input").value;
  const para = document.createElement("p");
  para.innerHTML = input;
  Document;
  document.getElementById("listupdate").appendChild(para);
}