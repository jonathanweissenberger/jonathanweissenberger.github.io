"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Salad extends GardenSimulator.Plant {
        constructor() {
            super("salad", 2, 5, 40000, "green", GardenSimulator.Seed.SALAD);
        }
    }
    GardenSimulator.Salad = Salad;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Salad.js.map