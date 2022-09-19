// Function to convert pressure (pascal to bar)
function convertPressure() {
    resultConverted.value = "";
    result.parentElement.classList.add("d-none");
    result  = document.getElementById("valueToConvert");
    result.parentElement.classList.remove("d-none");
    typeFunction = "pressure";
}

function calcPressure(value) {
    return eval(value * 0.00001);
}