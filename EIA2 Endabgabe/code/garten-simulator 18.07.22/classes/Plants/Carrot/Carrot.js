"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Carrot extends GardenSimulator.Plant {
        constructor() {
            super("carotte", 2, 1, 5000, "orange", GardenSimulator.Seed.CARROT);
        }
    }
    GardenSimulator.Carrot = Carrot;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Carrot.js.map