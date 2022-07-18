"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Field {
        constructor(_positionX, _positionY) {
            this.fieldSize = 100;
            this.plant = null;
            this.positionX = _positionX;
            this.positionY = _positionY;
        }
        handleField(_time) {
            this.handlePlantGrowProcess(_time);
            this.drawField();
        }
        checkIfClicked(_mousePositionX, _mousePositionY) {
            _mousePositionX -= this.fieldSize;
            _mousePositionY -= this.fieldSize;
            if (_mousePositionX < this.positionX * this.fieldSize && _mousePositionX > this.positionX * this.fieldSize - this.fieldSize && _mousePositionY < this.positionY * this.fieldSize && _mousePositionY > this.positionY * this.fieldSize - this.fieldSize) {
                this.handleClickOnField();
                return true;
            }
            return false;
        }
        handleClickOnField() {
            if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.PLANT && this.plant == null) {
                switch (GardenSimulator.player.selectedSeed) {
                    case GardenSimulator.Seed.CARROT:
                        var costs = GardenSimulator.market.getCurrentSeedValue(GardenSimulator.Seed.CARROT);
                        var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new GardenSimulator.Carrot();
                        break;
                    case GardenSimulator.Seed.ONION:
                        var costs = GardenSimulator.market.getCurrentSeedValue(GardenSimulator.Seed.ONION);
                        var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new GardenSimulator.Onion();
                        break;
                    case GardenSimulator.Seed.SALAD:
                        var costs = GardenSimulator.market.getCurrentSeedValue(GardenSimulator.Seed.SALAD);
                        var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new GardenSimulator.Salad();
                        break;
                    case GardenSimulator.Seed.RADISH:
                        var costs = GardenSimulator.market.getCurrentSeedValue(GardenSimulator.Seed.RADISH);
                        var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new GardenSimulator.Radish();
                        break;
                    case GardenSimulator.Seed.CORN:
                        var costs = GardenSimulator.market.getCurrentSeedValue(GardenSimulator.Seed.CORN);
                        var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                        if (!canBuy) {
                            break;
                        }
                        this.plant = new GardenSimulator.Corn();
                        break;
                }
            }
            else if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.WATER && this.plant != null) {
                this.plant.waterLevel += 10;
            }
            else if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.HARVEST && this.plant != null) {
                this.plant.harvestPlant();
                this.plant = null;
            }
            else if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.DUNG && this.plant != null) {
                const costs = GardenSimulator.market.getCurrentDungValue();
                var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                if (!canBuy) {
                    return;
                }
                this.plant.dungLevel += 10;
            }
            else if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.PESTICIDE && this.plant != null && this.plant.isInfested) {
                const costs = GardenSimulator.market.getCurrentPesticideValue();
                var canBuy = GardenSimulator.player.handleBuyProdukt(costs);
                if (!canBuy) {
                    return;
                }
                this.plant.isInfested = false;
            }
        }
        handlePlantGrowProcess(_time) {
            if (this.plant != null) {
                this.plant.handleGrowProcess(_time);
                if (this.plant.isDead == true) {
                    this.plant = null;
                }
            }
        }
        drawField() {
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            GardenSimulator.ctx.beginPath();
            GardenSimulator.ctx.rect(0, 0, this.fieldSize, this.fieldSize);
            GardenSimulator.ctx.stroke();
            if (this.plant != null) {
                this.drawPlant(this.plant.color);
            }
        }
        drawPlant(_color) {
            var _a, _b, _c, _d;
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            GardenSimulator.ctx.beginPath();
            if ((_a = this.plant) === null || _a === void 0 ? void 0 : _a.isRipe) {
                GardenSimulator.ctx.fillStyle = _color;
                GardenSimulator.ctx.fillRect(0, 0, this.fieldSize / 2, this.fieldSize / 2);
            }
            else {
                GardenSimulator.ctx.fillStyle = _color;
                GardenSimulator.ctx.rect(0, 0, this.fieldSize / 2, this.fieldSize / 2);
                this.drawGrowProcess();
            }
            GardenSimulator.ctx.strokeStyle = _color;
            GardenSimulator.ctx.stroke();
            GardenSimulator.ctx.strokeStyle = "#000";
            GardenSimulator.ctx.font = "20px Arial";
            GardenSimulator.ctx.fillStyle = "blue";
            GardenSimulator.ctx.fillText(`${(_b = this.plant) === null || _b === void 0 ? void 0 : _b.waterLevel}`, 70, 30);
            GardenSimulator.ctx.fillStyle = "brown";
            GardenSimulator.ctx.fillText(`${(_c = this.plant) === null || _c === void 0 ? void 0 : _c.dungLevel}`, 10, 90);
            if ((_d = this.plant) === null || _d === void 0 ? void 0 : _d.isInfested) {
                GardenSimulator.ctx.fillStyle = "red";
                GardenSimulator.ctx.fillText(`${this.plant.health}!`, 60, 90);
            }
        }
        drawGrowProcess() {
            var _a, _b;
            const difference = ((_a = this.plant) === null || _a === void 0 ? void 0 : _a.finalAge) / ((_b = this.plant) === null || _b === void 0 ? void 0 : _b.currentAge);
            GardenSimulator.ctx.fillRect(0, 0, this.fieldSize / 2, (this.fieldSize / 2) / difference);
        }
    }
    GardenSimulator.Field = Field;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Field.js.map