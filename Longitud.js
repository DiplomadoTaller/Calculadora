// 1m*(100cm/1m)
// (1cm*1m)/100cm

let metros = document.getElementById('metros');
let cm = document.getElementById('cm');

metros.oninput = () => {
    let output = (parseFloat(metros.value)*(100/1));
    cm.value = parseFloat(output.toFixed(2));
};

cm.oninput = () => {
    let output = (parseFloat(cm.value)*1/100);
    metros.value = parseFloat(output.toFixed(2));
};