"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Simulator {
        static start() {
            setInterval(this.loopCycle, Simulator.updateTime);
        }
        static loopCycle() {
            GardenSimulator.market.handleRandomMarketPrices();
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.clearRect(0, 0, 1000, 400);
            for (let field of GardenSimulator.gardenFields) {
                field.handleField(Simulator.updateTime);
            }
            Simulator.randomInfestation();
        }
        static randomInfestation() {
            const rndNumber = Math.floor(Math.random() * (40 - 0 + 1) + 0);
            if (rndNumber < GardenSimulator.gardenFields.length && GardenSimulator.gardenFields[rndNumber].plant != null) {
                const plant = GardenSimulator.gardenFields[rndNumber].plant;
                if (plant.isInfested == false && plant.isInfesting == false) {
                    this.bugs.push(new GardenSimulator.Bug(rndNumber));
                    plant.isInfesting = true;
                }
            }
            let counter = 0;
            for (let bug of this.bugs) {
                if (GardenSimulator.gardenFields[bug.targetField].plant == null) {
                    Simulator.bugs.splice(counter, 1);
                    counter--;
                }
                else if (bug.hasArrived) {
                    Simulator.bugs.splice(counter, 1);
                    counter--;
                }
                bug.drawBug(50);
                counter++;
            }
        }
    }
    Simulator.updateTime = 2000;
    Simulator.bugs = [];
    GardenSimulator.Simulator = Simulator;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Simulator.js.map