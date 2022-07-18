"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Tomato extends GardenSimulator.Plant {
        constructor() {
            super("Tomate", 5, 2, 15000, "red");
        }
    }
    GardenSimulator.Tomato = Tomato;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Tomato.js.map