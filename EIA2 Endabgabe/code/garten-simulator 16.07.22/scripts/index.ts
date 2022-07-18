window.addEventListener("load", handleLoad);

let startButton: HTMLButtonElement;
let money: HTMLInputElement;
let economyVariationSelection: HTMLSelectElement;

function handleLoad() {
    startButton = <HTMLButtonElement>document.getElementById("startButton");
    money = <HTMLInputElement>document.getElementById("money");
    economyVariationSelection = <HTMLSelectElement>document.getElementById("economy-variation");

    startButton.addEventListener("click", handlePressStartButton);
}

function handlePressStartButton() {
    const selectedStartMoney: number = parseInt(money.value);
    const selectedEconomyVariationMax: number = parseInt(economyVariationSelection.value);
    window.location.href = `./pages/gardenSimulator.html?startMoney=${selectedStartMoney}&economyVariationMax=${selectedEconomyVariationMax}`
} 