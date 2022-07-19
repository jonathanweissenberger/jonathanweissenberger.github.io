"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Bug {
        constructor(_targetField) {
            this.hasArrived = false;
            this.bugPositionX = 0;
            this.bugPositionY = 0;
            this.targetField = _targetField;
        }
        drawBug(_time) {
            if (this.bugPositionX < GardenSimulator.gardenFields[this.targetField].positionX * GardenSimulator.gardenFields[this.targetField].fieldSize) {
                this.bugPositionX += _time;
            }
            else if (this.bugPositionY < GardenSimulator.gardenFields[this.targetField].positionY * GardenSimulator.gardenFields[this.targetField].fieldSize) {
                this.bugPositionY += _time;
            }
            else {
                const plant = GardenSimulator.gardenFields[this.targetField].plant;
                plant.isInfested = true;
                plant.isInfesting = false;
                this.hasArrived = true;
            }
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.translate(this.bugPositionX + 10, this.bugPositionY);
            GardenSimulator.ctx.beginPath();
            GardenSimulator.ctx.fillStyle = "purple";
            GardenSimulator.ctx.fillRect(0, 0, 10, 10);
            GardenSimulator.ctx.stroke();
        }
    }
    GardenSimulator.Bug = Bug;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Bug.js.map