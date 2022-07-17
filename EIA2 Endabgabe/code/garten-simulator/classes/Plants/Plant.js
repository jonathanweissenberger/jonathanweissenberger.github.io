"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    let Seed;
    (function (Seed) {
        Seed[Seed["CARROT"] = 0] = "CARROT";
        Seed[Seed["TOMATO"] = 1] = "TOMATO";
    })(Seed = GardenSimulator.Seed || (GardenSimulator.Seed = {}));
    class Plant {
        constructor(_name, _waterConsumtion, _dungConsumtion, _finalAge, _color) {
            this.waterLevel = 100;
            this.dungLevel = 100;
            this.currentAge = 0;
            this.isRipe = false;
            this.isDead = false;
            this.name = _name;
            this.waterConsumtion = _waterConsumtion;
            this.dungConsumtion = _dungConsumtion;
            this.finalAge = _finalAge;
            this.color = _color;
        }
        ;
        handleGrowProcess(_time) {
            this.handlePlantAge(_time);
            this.reduceWaterLevel();
            this.reduceDungLevel();
            this.checkPlantHealth();
        }
        harvestPlant() {
            if (this.isRipe) {
                GardenSimulator.player.setMoney(10, true);
            }
        }
        handlePlantAge(_time) {
            console.log(_time);
            this.currentAge += _time;
            if (this.currentAge >= this.finalAge) {
                this.isRipe = true;
            }
        }
        reduceWaterLevel() {
            this.waterLevel -= this.waterConsumtion;
        }
        reduceDungLevel() {
            this.dungLevel -= this.dungConsumtion;
        }
        checkPlantHealth() {
            if (this.waterLevel <= 0 || this.waterLevel >= 120 || this.dungLevel <= 0 || this.dungLevel >= 120) {
                this.isDead = true;
            }
        }
    }
    GardenSimulator.Plant = Plant;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Plant.js.map