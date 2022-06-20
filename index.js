const numInput = document.getElementById('num-input');

const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

document.getElementById('convert-btn').addEventListener('click', () => {
    let numInputValue = numInput.value;

    let meterToFeet = numInputValue * 3.281;
    let feetToMeter = numInputValue / 3.281;
    
    lengthEl.textContent = `
    ${numInputValue} meters = ${meterToFeet} feet | ${numInputValue} feet = ${feetToMeter} meters`;

    let literToGallon = numInputValue / 3.785;
    let gallonToLiter = numInputValue * 3.785;

    volumeEl.textContent = `
    ${numInputValue} liters = ${literToGallon} gallons | ${numInputValue} gallons = ${gallonToLiter} liters`;

    let kiloToPound = numInputValue * 2.205;
    let poundToKilo = numInputValue / 2.205;

    massEl.textContent = `
    ${numInputValue} kilos = ${kiloToPound} pounds | ${numInputValue} pounds = ${poundToKilo} kilos`;
});
