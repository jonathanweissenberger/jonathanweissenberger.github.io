"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Radish extends GardenSimulator.Plant {
        constructor() {
            super("radish", 2, 2, 50000, "red", GardenSimulator.Seed.RADISH);
        }
    }
    GardenSimulator.Radish = Radish;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Radish.js.map