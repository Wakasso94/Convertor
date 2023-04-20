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

convertBtn.addEventListener("click", function () {
    let inputValue = convertInput.value;
    conversion(inputValue);
})

function conversion(num1) {
    let metersFeet = `${num1} meters = ${Number(num1 * 3.281).toFixed(2)} feet`
    let feetMeters = `${num1} feet = ${Number(num1 / 3.281).toFixed(2)} meters`
    convertLength.innerHTML = `${metersFeet} | ${feetMeters}`;

    let litersGallons = `${num1} liters = ${Number(num1 * 0.264).toFixed(2)} gallons`
    let gallonsLiters = `${num1} gallons = ${Number(num1 / 0.264).toFixed(2)} liters`
    convertVolume.innerHTML = `${litersGallons} | ${gallonsLiters}`;

    let kilosPounds = `${num1} kilos = ${Number(num1 * 2.204).toFixed(2)} pounds`
    let poundsKilos = `${Number(num1 / 2.204).toFixed(2)} kilos`
    convertMass.innerHTML = `${kilosPounds} | ${num1} pounda = ${poundsKilos}`;
}
