namespace GardenSimulator {

    export class Field {

        public fieldSize: number = 100;
        public plant: Plant | null = null;
        public positionX: number;
        public positionY: number;

        public constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX;
            this.positionY = _positionY;
        }

        public handleField(_time: number): void {
            this.handlePlantGrowProcess(_time);
            this.drawField();
        }

        public checkIfClicked(_mousePositionX: number, _mousePositionY: number): boolean {
            _mousePositionX -= this.fieldSize;
            _mousePositionY -= this.fieldSize;
            if (_mousePositionX < this.positionX * this.fieldSize && _mousePositionX > this.positionX * this.fieldSize - this.fieldSize && _mousePositionY < this.positionY * this.fieldSize && _mousePositionY > this.positionY * this.fieldSize -this.fieldSize) {
                this.handleClickOnField();
                return true;
            }
            return false;
        }

        private handleClickOnField():void {
            if (player.currentAction == PlayerAction.PLANT && this.plant == null) {
                switch (player.selectedSeed) {                
                    case Seed.CARROT:
                        var costs: number = market.getCurrentSeedValue(Seed.CARROT);
                        var canBuy: boolean = player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new Carrot();
                        break;
                    case Seed.ONION:
                        var costs: number = market.getCurrentSeedValue(Seed.ONION);
                        var canBuy: boolean = player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new Onion();
                        break;
                    case Seed.SALAD:
                        var costs: number = market.getCurrentSeedValue(Seed.SALAD);
                        var canBuy: boolean = player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new Salad();
                        break;
                    case Seed.RADISH:
                        var costs: number = market.getCurrentSeedValue(Seed.RADISH);
                        var canBuy: boolean = player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new Radish();
                        break;
                    case Seed.CORN:
                        var costs: number = market.getCurrentSeedValue(Seed.CORN);
                        var canBuy: boolean = player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new Corn();
                        break;
                }
            } else if (player.currentAction == PlayerAction.WATER && this.plant != null) {
                this.plant.waterLevel += 10;
            } else if (player.currentAction == PlayerAction.HARVEST && this.plant != null) {
                this.plant.harvestPlant();
                this.plant = null;
            } else if (player.currentAction == PlayerAction.DUNG && this.plant != null) {
                const costs = market.getCurrentDungValue();
                var canBuy: boolean = player.handleBuyProdukt(costs)
                if (!canBuy) {
                    return;
                }
                this.plant.dungLevel += 10;
            } else if (player.currentAction == PlayerAction.PESTICIDE && this.plant != null && this.plant.isInfested) {
                const costs = market.getCurrentPesticideValue();
                var canBuy: boolean = player.handleBuyProdukt(costs)
                if (!canBuy) {
                    return;
                }
                this.plant.isInfested = false;
            }
        }

        private handlePlantGrowProcess(_time: number): void {
            if (this.plant != null) {
                this.plant.handleGrowProcess(_time);
                if (this.plant.isDead == true) {
                    this.plant = null;
                }
            }
        }

        private drawField(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            ctx.beginPath();
            ctx.rect(0, 0, this.fieldSize, this.fieldSize);
            ctx.stroke();

            if (this.plant != null) {
                this.drawPlant(this.plant.color);
            }
        }

        private drawPlant(_color: string): void {
            ctx.resetTransform();
            ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            ctx.beginPath();
            if (this.plant?.isRipe) {
                ctx.fillStyle = _color;
                ctx.fillRect(0, 0, this.fieldSize / 2, this.fieldSize /2);
            } else {
                ctx.fillStyle = _color;
                ctx.rect(0, 0, this.fieldSize / 2, this.fieldSize /2);
                this.drawGrowProcess();
            }
            ctx.strokeStyle = _color;
            ctx.stroke();
            ctx.strokeStyle = "#000";


            ctx.font = "20px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText(`${this.plant?.waterLevel}`, 70, 30);
            ctx.fillStyle = "brown";
            ctx.fillText(`${this.plant?.dungLevel}`, 10, 90);

            if (this.plant?.isInfested) {
                ctx.fillStyle = "red";
                ctx.fillText(`${this.plant.health}!`, 60, 90);
            }
        }

        private drawGrowProcess(): void {
            const difference: number = <number>this.plant?.finalAge / <number>this.plant?.currentAge;
            ctx.fillRect(0, 0, this.fieldSize / 2, (this.fieldSize / 2) / difference);
        }

    }

}


