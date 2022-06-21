const numInput = document.getElementById('num-input');

const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

document.getElementById('convert-btn').addEventListener('click', () => {
    let numInputValue = numInput.value;

    // Length
    let meterToFeet = numInputValue * 3.281;
    let feetToMeter = numInputValue / 3.281;
    
    lengthEl.textContent = `
    ${numInputValue} meters = ${meterToFeet.toFixed(3)} feet | ${numInputValue} feet = ${feetToMeter.toFixed(3)} meters`;

    // Volume
    let literToGallon = numInputValue / 3.785;
    let gallonToLiter = numInputValue * 3.785;

    volumeEl.textContent = `
    ${numInputValue} liters = ${literToGallon.toFixed(3)} gallons | ${numInputValue} gallons = ${gallonToLiter.toFixed(3)} liters`;

    // Weight
    let kiloToPound = numInputValue * 2.205;
    let poundToKilo = numInputValue / 2.205;

    massEl.textContent = `
    ${numInputValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${numInputValue} pounds = ${poundToKilo.toFixed(3)} kilos`;
});
