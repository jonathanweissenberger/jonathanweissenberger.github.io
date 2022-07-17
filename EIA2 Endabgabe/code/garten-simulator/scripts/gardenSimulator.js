"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    window.addEventListener("load", handleLoad);
    let startMoney;
    let economyVariationMax;
    const amountOfHorizontalFields = 10;
    const amountOfVerticalFields = 4;
    let plantButton;
    let waterButton;
    let dungButton;
    let harvestButton;
    let moneyDisplay;
    let selectedActionDisplay;
    let seedSelection;
    GardenSimulator.gardenFields = [];
    function handleLoad() {
        handleUrlParams();
        GardenSimulator.player = new GardenSimulator.Player(startMoney);
        moneyDisplay = document.getElementById("moneyDisplay");
        moneyDisplay.innerText = startMoney + " Euro";
        selectedActionDisplay = document.getElementById("selectedActionDisplay");
        seedSelection = document.getElementById("cropSelection");
        GardenSimulator.canvas = document.getElementById("garden-canvas");
        GardenSimulator.canvas.addEventListener("click", (e) => handleClickOnCanvas(GardenSimulator.canvas, e));
        GardenSimulator.ctx = GardenSimulator.canvas.getContext("2d");
        plantButton = document.getElementById("plantButton");
        plantButton.addEventListener("click", handlePressPlantButton);
        waterButton = document.getElementById("waterButton");
        waterButton.addEventListener("click", handlePressWaterButton);
        dungButton = document.getElementById("dungButton");
        dungButton.addEventListener("click", handlePressDungButton);
        harvestButton = document.getElementById("harvestButton");
        harvestButton.addEventListener("click", handlePressHarvestButton);
        setupGardenFields(amountOfHorizontalFields, amountOfVerticalFields);
        setupCanvas();
        GardenSimulator.Simulator.start();
    }
    function handleClickOnCanvas(_canvas, _evt) {
        let rect = GardenSimulator.canvas.getBoundingClientRect();
        let mouseX = (_evt.clientX - rect.left);
        let mouseY = (_evt.clientY - rect.top);
        console.log(`x = ${mouseX} and y = ${mouseY}`);
        for (let field of GardenSimulator.gardenFields) {
            const wasClicked = field.checkIfClicked(mouseX, mouseY);
            if (wasClicked) {
                break;
            }
        }
    }
    function handlePressPlantButton() {
        seedSelection.addEventListener("change", () => handleSelectedSeedChange(seedSelection.value));
        const action = GardenSimulator.PlayerAction.PLANT;
        GardenSimulator.player.currentAction = action;
        GardenSimulator.player.setSelectedSeed(seedSelection.value);
        updateSelectedActionDisplay(action);
    }
    function handleSelectedSeedChange(_selectedSeed) {
        GardenSimulator.player.setSelectedSeed(_selectedSeed);
    }
    function handlePressWaterButton() {
        const action = GardenSimulator.PlayerAction.WATER;
        GardenSimulator.player.currentAction = action;
        updateSelectedActionDisplay(action);
    }
    function handlePressDungButton() {
        const action = GardenSimulator.PlayerAction.DUNG;
        GardenSimulator.player.currentAction = GardenSimulator.PlayerAction.DUNG;
        updateSelectedActionDisplay(action);
    }
    function handlePressHarvestButton() {
        const action = GardenSimulator.PlayerAction.HARVEST;
        GardenSimulator.player.currentAction = GardenSimulator.PlayerAction.HARVEST;
        updateSelectedActionDisplay(action);
    }
    function handleUrlParams() {
        const urlString = window.location.href;
        const url = new URL(urlString);
        const startMoneyParamValue = url.searchParams.get("startMoney");
        if (startMoneyParamValue === null) {
            startMoney = 10;
        }
        else {
            startMoney = parseInt(startMoneyParamValue);
        }
        const economyVariationMaxParamValue = url.searchParams.get("economyVariationMax");
        if (economyVariationMaxParamValue === null) {
            economyVariationMax = 10;
        }
        else {
            economyVariationMax = parseInt(economyVariationMaxParamValue);
        }
    }
    function setupGardenFields(_width, _height) {
        for (let i = 0; i < _width; i++) {
            for (let j = 0; j < _height; j++) {
                GardenSimulator.gardenFields.push(new GardenSimulator.Field(i, j));
            }
        }
    }
    function setupCanvas() {
        GardenSimulator.canvas.width = 1000;
        GardenSimulator.canvas.height = 400;
    }
    function updateDisplayAmountOfMoney(_money) {
        moneyDisplay.innerText = _money + "";
    }
    GardenSimulator.updateDisplayAmountOfMoney = updateDisplayAmountOfMoney;
    function updateSelectedActionDisplay(_activity) {
        selectedActionDisplay.innerText = _activity + "";
    }
    GardenSimulator.updateSelectedActionDisplay = updateSelectedActionDisplay;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=gardenSimulator.js.map