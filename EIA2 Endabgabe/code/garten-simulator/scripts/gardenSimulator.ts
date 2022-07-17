namespace GardenSimulator {

    window.addEventListener("load", handleLoad);

    let startMoney: number;
    let economyVariationMax: number;
    const amountOfHorizontalFields: number = 10;
    const amountOfVerticalFields: number = 4;
    export let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
    let plantButton: HTMLButtonElement;
    let waterButton: HTMLButtonElement;
    let dungButton: HTMLButtonElement;
    let harvestButton: HTMLButtonElement;
    export let player: Player;
    let moneyDisplay: HTMLParagraphElement;
    let selectedActionDisplay: HTMLElement;
    let seedSelection: HTMLSelectElement;
    export let gardenFields: Field[] = [];

    function handleLoad() {
        handleUrlParams();
        player = new Player(startMoney);
        moneyDisplay = <HTMLParagraphElement>document.getElementById("moneyDisplay");
        moneyDisplay.innerText = startMoney + " Euro";
        selectedActionDisplay = <HTMLParagraphElement>document.getElementById("selectedActionDisplay");
        seedSelection = <HTMLSelectElement>document.getElementById("cropSelection");
        canvas = <HTMLCanvasElement>document.getElementById("garden-canvas");
        canvas.addEventListener("click", (e) => handleClickOnCanvas(canvas, e))
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        plantButton = <HTMLButtonElement>document.getElementById("plantButton");
        plantButton.addEventListener("click", handlePressPlantButton);
        waterButton = <HTMLButtonElement>document.getElementById("waterButton");
        waterButton.addEventListener("click", handlePressWaterButton);
        dungButton = <HTMLButtonElement>document.getElementById("dungButton");
        dungButton.addEventListener("click", handlePressDungButton);
        harvestButton = <HTMLButtonElement>document.getElementById("harvestButton");
        harvestButton.addEventListener("click", handlePressHarvestButton);
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
        seedSelection.addEventListener("change", () => handleSelectedSeedChange(seedSelection.value))
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
        player.currentAction = PlayerAction.DUNG;
        updateSelectedActionDisplay(action);
    }

    function handlePressHarvestButton(): void {
        const action: PlayerAction = PlayerAction.HARVEST;
        player.currentAction = PlayerAction.HARVEST;
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

}

