// Function to convert pressure (pascal to bar)
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