const numInput = document.getElementById('num-input');
let numInputValue = numInput.value;

const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

document.getElementById('convert-btn').addEventListener('click', calculateAll);

function calculateAll() {
    calcLength();
    calcVolume();
    calcMass();
}

function calcLength() {
    let meterToFeet = numInputValue * 3.281;
    let feetToMeter = numInputValue / 3.281;
    
    lengthEl.textContent = `
    ${numInputValue} meters = ${meterToFeet} feet | ${numInputValue} feet = ${feetToMeter} meters`;
}

function calcVolume() {
    let literToGallon = numInputValue / 3.785;
    let gallonToLiter = numInputValue * 3.785;

    volumeEl.textContent = `
    ${numInputValue} liters = ${literToGallon} gallons | ${numInputValue} gallons = ${gallonToLiter} liters`;
}

function calcMass() {
    let kiloToPound = numInputValue * 2.205;
    let poundToKilo = numInputValue / 2.205;

    massEl.textContent = `
    ${numInputValue} kilos = ${kiloToPound} pounds | ${numInputValue} pounds = ${poundToKilo} kilos`;
}

