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
                if (GardenSimulator.player.currentAction == GardenSimulator.PlayerAction.PLANT) {
                    switch (GardenSimulator.player.selectedSeed) {
                        case GardenSimulator.Seed.CARROT:
                            this.plant = new GardenSimulator.Carrot();
                            break;
                        case GardenSimulator.Seed.TOMATO:
                            this.plant = new GardenSimulator.Tomato();
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
                    this.plant.dungLevel += 10;
                }
                if (this.plant === null) {
                }
                return true;
            }
            return false;
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
                console.log(this.plant);
                this.drawPlant(this.plant.color);
            }
        }
        drawPlant(_color) {
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            GardenSimulator.ctx.beginPath();
            GardenSimulator.ctx.rect(0, 0, this.fieldSize / 2, this.fieldSize / 2);
            GardenSimulator.ctx.strokeStyle = _color;
            GardenSimulator.ctx.stroke();
            GardenSimulator.ctx.strokeStyle = "#000";
        }
    }
    GardenSimulator.Field = Field;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Field.js.map