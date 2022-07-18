"use strict";
window.addEventListener("load", handleLoad);
let startButton;
let money;
let economyVariationSelection;
function handleLoad() {
    startButton = document.getElementById("startButton");
    money = document.getElementById("money");
    economyVariationSelection = document.getElementById("economy-variation");
    startButton.addEventListener("click", handlePressStartButton);
}
function handlePressStartButton() {
    const selectedStartMoney = parseInt(money.value);
    const selectedEconomyVariationMax = parseInt(economyVariationSelection.value);
    window.location.href = `./pages/gardenSimulator.html?startMoney=${selectedStartMoney}&economyVariationMax=${selectedEconomyVariationMax}`;
}
//# sourceMappingURL=index.js.map