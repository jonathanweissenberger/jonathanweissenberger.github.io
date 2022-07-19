"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Onion extends GardenSimulator.Plant {
        constructor() {
            super("onion", 2, 1, 35000, "grey", GardenSimulator.Seed.ONION);
        }
    }
    GardenSimulator.Onion = Onion;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Onion.js.map