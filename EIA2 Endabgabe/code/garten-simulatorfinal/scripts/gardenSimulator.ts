namespace GardenSimulator {

    window.addEventListener("load", handleLoad);

    let startMoney: number;
    export let economyVariationMax: number;
    const amountOfHorizontalFields: number = 10;
    const amountOfVerticalFields: number = 4;
    export let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
    let plantButton: HTMLButtonElement;
    let waterButton: HTMLButtonElement;
    let dungButton: HTMLButtonElement;
    let harvestButton: HTMLButtonElement;
    let pesticideButton: HTMLButtonElement;
    export let player: Player;
    export let market: Market;
    let moneyDisplay: HTMLParagraphElement;
    let marketSeedPriceDisplay: HTMLDivElement;
    let marketPlantPriceDisplay: HTMLDivElement;
    let marketCarePriceDisplay: HTMLDivElement;
    let selectedActionDisplay: HTMLElement;
    let seedSelection: HTMLSelectElement;
    export let gardenFields: Field[] = [];

    function handleLoad() {
        handleUrlParams();
        player = new Player(startMoney);
        market = new Market();
        moneyDisplay = <HTMLParagraphElement>document.getElementById("money-display");
        moneyDisplay.innerText = startMoney + " Euro";
        marketSeedPriceDisplay = <HTMLDivElement>document.getElementById("seed-prices");
        marketPlantPriceDisplay = <HTMLDivElement>document.getElementById("plant-prices");
        marketCarePriceDisplay = <HTMLDivElement>document.getElementById("care-prices");
        selectedActionDisplay = <HTMLParagraphElement>document.getElementById("selected-action-display");
        seedSelection = <HTMLSelectElement>document.getElementById("crop-selection");
        canvas = <HTMLCanvasElement>document.getElementById("garden-canvas");
        canvas.addEventListener("click", (e) => handleClickOnCanvas(canvas, e))
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        plantButton = <HTMLButtonElement>document.getElementById("plant-button");
        plantButton.addEventListener("click", handlePressPlantButton);
        seedSelection.addEventListener("change", () => handleSelectedSeedChange(seedSelection.value))
        waterButton = <HTMLButtonElement>document.getElementById("water-button");
        waterButton.addEventListener("click", handlePressWaterButton);
        dungButton = <HTMLButtonElement>document.getElementById("dung-button");
        dungButton.addEventListener("click", handlePressDungButton);
        harvestButton = <HTMLButtonElement>document.getElementById("harvest-button");
        harvestButton.addEventListener("click", handlePressHarvestButton);
        pesticideButton = <HTMLButtonElement>document.getElementById("pesticide-button");
        pesticideButton.addEventListener("click", handlePressPestizideButton);
        setupGardenFields(amountOfHorizontalFields, amountOfVerticalFields);
        setupCanvas();
        Simulator.start();
    }

    function handleClickOnCanvas(_canvas: HTMLCanvasElement, _evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mouseX = (_evt.clientX - rect.left);
        let mouseY = (_evt.clientY - rect.top);
        console.log(`x = ${mouseX} and y = ${mouseY}`)
        for (let field of gardenFields) {
            const wasClicked: boolean =  field.checkIfClicked(mouseX, mouseY);
            if (wasClicked) {
                break;
            }
        }
    }

    function handlePressPlantButton(): void {
        const action: PlayerAction = PlayerAction.PLANT;
        player.currentAction = action;
        player.setSelectedSeed(seedSelection.value);
        updateSelectedActionDisplay(action);
    }

    function handleSelectedSeedChange(_selectedSeed: string) {
        player.setSelectedSeed(_selectedSeed);
    }

    function handlePressWaterButton(): void {
        const action: PlayerAction = PlayerAction.WATER;
        player.currentAction = action;
        updateSelectedActionDisplay(action);
    }

    function handlePressDungButton(): void {
        const action: PlayerAction = PlayerAction.DUNG;
        player.currentAction = action;
        updateSelectedActionDisplay(action);
    }

    function handlePressHarvestButton(): void {
        const action: PlayerAction = PlayerAction.HARVEST;
        player.currentAction = action;
        updateSelectedActionDisplay(action);
    }

    function handlePressPestizideButton(): void {
        const action: PlayerAction = PlayerAction.PESTICIDE;
        player.currentAction = action;
        updateSelectedActionDisplay(action);
    }

    function handleUrlParams(): void {
        const urlString: string = window.location.href;
        const url: URL = new URL(urlString);
        const startMoneyParamValue = url.searchParams.get("startMoney");
        if (startMoneyParamValue === null ) {
            startMoney = 10;
        } else {
            startMoney = parseInt(startMoneyParamValue);
        }
        const economyVariationMaxParamValue = url.searchParams.get("economyVariationMax");
        if (economyVariationMaxParamValue === null ) {
            economyVariationMax = 10;
        } else {
            economyVariationMax = parseInt(economyVariationMaxParamValue);
        }
    }

    function setupGardenFields(_width: number, _height: number): void {
        for(let i: number = 0; i < _width; i++) {
            for(let j: number = 0; j < _height; j++) {
                gardenFields.push(new Field(i, j));
            }
        }
    }

    function setupCanvas(): void {
        canvas.width = 1000;
        canvas.height = 400;
    }

    export function updateDisplayAmountOfMoney(_money: number) {
        moneyDisplay.innerText = _money + "";
    }

    export function updateSelectedActionDisplay(_activity: PlayerAction) {
        selectedActionDisplay.innerText = _activity + "";
    }

    export function updateMarketPricesDisplay(_seedPrices: SeedPrices, _plantPrices: PlantPrices, _dungPrice: number, _pesticidePrice: number) {
        marketSeedPriceDisplay.innerHTML = `<h4>Setzlinge</h4><p>Karrotten: ${_seedPrices.carrot}</p><p>Ziebeln: ${_seedPrices.onion}</p><p>Salat: ${_seedPrices.salad}</p><p>Radieschen: ${_seedPrices.radish}</p><p>Mais: ${_seedPrices.corn}</p>`;
        marketPlantPriceDisplay.innerHTML = `<h4>Pflanzen</h4><p>Karrotten: ${_plantPrices.carrot}</p><p>Ziebeln: ${_plantPrices.onion}</p><p>Salat: ${_plantPrices.salad}</p><p>Radieschen: ${_plantPrices.radish}</p><p>Mais: ${_plantPrices.corn}</p>`;
        marketCarePriceDisplay.innerHTML = `<h4>Sorgfalt</h4><p>Dünger: ${_dungPrice}</p><p>Pestizide: ${_pesticidePrice}</p>`;
    }

}

