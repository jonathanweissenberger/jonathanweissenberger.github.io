"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    window.addEventListener("load", handleLoad);
    let startMoney;
    const amountOfHorizontalFields = 10;
    const amountOfVerticalFields = 4;
    let plantButton;
    let waterButton;
    let dungButton;
    let harvestButton;
    let pesticideButton;
    let moneyDisplay;
    let marketSeedPriceDisplay;
    let marketPlantPriceDisplay;
    let marketCarePriceDisplay;
    let selectedActionDisplay;
    let seedSelection;
    GardenSimulator.gardenFields = [];
    function handleLoad() {
        handleUrlParams();
        GardenSimulator.player = new GardenSimulator.Player(startMoney);
        GardenSimulator.market = new GardenSimulator.Market();
        moneyDisplay = document.getElementById("money-display");
        moneyDisplay.innerText = startMoney + " Euro";
        marketSeedPriceDisplay = document.getElementById("seed-prices");
        marketPlantPriceDisplay = document.getElementById("plant-prices");
        marketCarePriceDisplay = document.getElementById("care-prices");
        selectedActionDisplay = document.getElementById("selected-action-display");
        seedSelection = document.getElementById("crop-selection");
        GardenSimulator.canvas = document.getElementById("garden-canvas");
        GardenSimulator.canvas.addEventListener("click", (e) => handleClickOnCanvas(GardenSimulator.canvas, e));
        GardenSimulator.ctx = GardenSimulator.canvas.getContext("2d");
        plantButton = document.getElementById("plant-button");
        plantButton.addEventListener("click", handlePressPlantButton);
        seedSelection.addEventListener("change", () => handleSelectedSeedChange(seedSelection.value));
        waterButton = document.getElementById("water-button");
        waterButton.addEventListener("click", handlePressWaterButton);
        dungButton = document.getElementById("dung-button");
        dungButton.addEventListener("click", handlePressDungButton);
        harvestButton = document.getElementById("harvest-button");
        harvestButton.addEventListener("click", handlePressHarvestButton);
        pesticideButton = document.getElementById("pesticide-button");
        pesticideButton.addEventListener("click", handlePressPestizideButton);
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
        GardenSimulator.player.currentAction = action;
        updateSelectedActionDisplay(action);
    }
    function handlePressHarvestButton() {
        const action = GardenSimulator.PlayerAction.HARVEST;
        GardenSimulator.player.currentAction = action;
        updateSelectedActionDisplay(action);
    }
    function handlePressPestizideButton() {
        const action = GardenSimulator.PlayerAction.PESTICIDE;
        GardenSimulator.player.currentAction = action;
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
            GardenSimulator.economyVariationMax = 10;
        }
        else {
            GardenSimulator.economyVariationMax = parseInt(economyVariationMaxParamValue);
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
    function updateMarketPricesDisplay(_seedPrices, _plantPrices, _dungPrice, _pesticidePrice) {
        marketSeedPriceDisplay.innerHTML = `<h4>Setzlinge</h4><p>Karrotten: ${_seedPrices.carrot}</p><p>Ziebeln: ${_seedPrices.onion}</p><p>Salat: ${_seedPrices.salad}</p><p>Radieschen: ${_seedPrices.radish}</p><p>Mais: ${_seedPrices.corn}</p>`;
        marketPlantPriceDisplay.innerHTML = `<h4>Pflanzen</h4><p>Karrotten: ${_plantPrices.carrot}</p><p>Ziebeln: ${_plantPrices.onion}</p><p>Salat: ${_plantPrices.salad}</p><p>Radieschen: ${_plantPrices.radish}</p><p>Mais: ${_plantPrices.corn}</p>`;
        marketCarePriceDisplay.innerHTML = `<h4>Sorgfalt</h4><p>Dünger: ${_dungPrice}</p><p>Pestizide: ${_pesticidePrice}</p>`;
    }
    GardenSimulator.updateMarketPricesDisplay = updateMarketPricesDisplay;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=gardenSimulator.js.map