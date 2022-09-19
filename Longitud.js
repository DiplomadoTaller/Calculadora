// Function to convert length (metro to cm)
function convertLength() {
    resultConverted.value = "";
    result.parentElement.classList.add("d-none");
    result  = document.getElementById("valueToConvert");
    result.parentElement.classList.remove("d-none");
    typeFunction = "length";
}

function calcLength(value) {
    return eval(value * 100);
}