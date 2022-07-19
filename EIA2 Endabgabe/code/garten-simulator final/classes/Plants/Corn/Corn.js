"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Corn extends GardenSimulator.Plant {
        constructor() {
            super("corn", 2, 2, 70000, "yellow", GardenSimulator.Seed.CORN);
        }
    }
    GardenSimulator.Corn = Corn;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Corn.js.map