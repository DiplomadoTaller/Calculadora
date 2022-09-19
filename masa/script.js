const timeFormat = new Intl.RelativeTimeFormat("en",{
    localeMatcher: "lookup",
    numeric: "auto",
    style: "long"
});

//----------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Celsius a Fahrenheit
// f=((c*9/5)+32)

//let funcionalidad = document.getElementById('funconalidad');

// let celsius = document.getElementById('celsius');
// let fahrenheit = document.getElementById('fahrenheit');

// celsius.oninput = () => {
//     let output = (parseFloat(celsius.value)*9/5+32);
//     fahrenheit.value = parseFloat(output.toFixed(2));

// };

// fahrenheit.oninput = () => {
//     let output = (parseFloat(fahrenheit.value)*9/5+32);
//     celsius.value = parseFloat(output.toFixed(2));
// };

// 
// 1.0 bar = 100.000 pa
// Pascal a Bar --> 1pa *(1ba/100.000pa)
// Bar a Pascal --> 1ba * (100.000pa/1.0ba)
// 

// let pascal = document.getElementById('pascal');
// let bar = document.getElementById('bar');

// pascal.oninput = () => {
//     let output = (parseFloat(pascal.value)*1.0/100.000);
//     bar.value = parseFloat(output.toFixed(2));
// };

// bar.oninput = () => {
//     let output = (parseFloat(bar.value)*100.000/1.0);
//     pascal.value = parseFloat(output.toFixed(2));
// };

// 1kg*(1000g/1kg)
// (1g*1kg)/1000g

let kilos = document.getElementById('kilos');
let gramos = document.getElementById('gramos');

kilos.oninput = () => {
    let output = (parseFloat(kilos.value)*(1000/1));
    gramos.value = parseFloat(output.toFixed(2));
};

// gramos.oninput = () => {
//     let output = (parseFloat(gramos.value)*1/1000);
//     kilos.value = parseFloat(output.toFixed(2));
// };

// // 1m*(100cm/1m)
// // (1cm*1m)/100cm

// let metros = document.getElementById('metros');
// let cm = document.getElementById('cm');

// metros.oninput = () => {
//     let output = (parseFloat(metros.value)*(100/1));
//     cm.value = parseFloat(output.toFixed(2));
// };

// cm.oninput = () => {
//     let output = (parseFloat(cm.value)*1/100);
//     metros.value = parseFloat(output.toFixed(2));
// };


