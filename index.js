/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("btn");
const convertLength = document.getElementById("p-length");
const convertVolume = document.getElementById("p-volume");
const convertMass = document.getElementById("p-mass");
let convertInput = document.getElementById("convert-input");

convertBtn.addEventListener("click", function() {
    let inputValue = convertInput.value;
    conversion(inputValue);
})

function conversion(num1) {
    let length = convertLength.innerHTML = `${num1} meters = ${Number(num1 * 3.281).toFixed(2)} feet | ${num1} feet = ${Number(num1 / 3.281).toFixed(2)} meters`;
    
    let volume = convertVolume.innerHTML = `${num1} liters = ${Number(num1 * 0.264).toFixed(2)} gallons | ${num1} gallons = ${Number(num1 / 0.264).toFixed(2)} liters`;
    
    let mass = convertMass.innerHTML = `${num1} kilos = ${Number(num1 * 2.204).toFixed(2)} pounds | ${num1} pounda = ${Number(num1 / 2.204).toFixed(2)} kilos`;
}
