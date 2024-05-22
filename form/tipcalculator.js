let billAmountJs = document.getElementById("billAmount");
let percentageTipJs = document.getElementById("percentageTip");
let tipAmountJs = document.getElementById("tipAmount");
let totalAmountJs = document.getElementById("totalAmount");
let errorMessageJs = document.getElementById("errorMessage")

function buttonCalculate() {
    let billNumberValue = billAmountJs.value;
    let percentageNumberValue = percentageTipJs.value;
    if (billNumberValue === "") {
        errorMessageJs.textContent = "Please Enter a Valid Input";
        errorMessageJs.style.color = "red";
    } else if (percentageNumberValue === "") {
        errorMessageJs.textContent = "Please Enter a Valid Input";
        errorMessageJs.style.color = "red";
    } else {
        errorMessageJs.textContent = "";
        let billNumber = parseInt(billNumberValue);
        let percentageNumber = parseInt(percentageNumberValue);
        let calculatedTip = (percentageNumber / 100) * billNumber;
        let totalAmount = billNumber + calculatedTip;
        tipAmountJs.value = calculatedTip;
        totalAmountJs.value = totalAmount;
    }

}