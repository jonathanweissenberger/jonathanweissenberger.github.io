"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Simulator {
        static start() {
            setInterval(this.loopCycle, Simulator.updateTime);
        }
        static loopCycle() {
            Simulator.gameTime += Simulator.updateTime / 1000;
            GardenSimulator.ctx.resetTransform();
            GardenSimulator.ctx.clearRect(0, 0, 1000, 400);
            for (let field of GardenSimulator.gardenFields) {
                field.handleField(Simulator.updateTime);
            }
        }
    }
    Simulator.gameTime = 0;
    Simulator.updateTime = 1000;
    GardenSimulator.Simulator = Simulator;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Simulator.js.map