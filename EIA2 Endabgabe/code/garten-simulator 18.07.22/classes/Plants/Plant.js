"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    let Seed;
    (function (Seed) {
        Seed[Seed["CARROT"] = 0] = "CARROT";
        Seed[Seed["ONION"] = 1] = "ONION";
        Seed[Seed["SALAD"] = 2] = "SALAD";
        Seed[Seed["RADISH"] = 3] = "RADISH";
        Seed[Seed["CORN"] = 4] = "CORN";
    })(Seed = GardenSimulator.Seed || (GardenSimulator.Seed = {}));
    class Plant {
        constructor(_name, _waterConsumtion, _dungConsumtion, _finalAge, _color, _seedType) {
            this.waterLevel = 100;
            this.dungLevel = 100;
            this.currentAge = 0;
            this.health = 100;
            this.isRipe = false;
            this.isDead = false;
            this.isInfested = false;
            this.isInfesting = false;
            this.name = _name;
            this.waterConsumtion = _waterConsumtion;
            this.dungConsumtion = _dungConsumtion;
            this.finalAge = _finalAge;
            this.color = _color;
            this.seedType = _seedType;
        }
        ;
        handleGrowProcess(_time) {
            this.handlePlantAge(_time);
            this.reduceWaterLevel();
            this.reduceDungLevel();
            this.handleInfestation();
            this.checkPlantHealth();
        }
        harvestPlant() {
            if (this.isRipe && !this.isInfested) {
                let money;
                money = GardenSimulator.market.getCurrentPlantValue(this.seedType);
                GardenSimulator.player.setMoney(money, true);
            }
        }
        handlePlantAge(_time) {
            this.currentAge += _time;
            if (this.currentAge >= this.finalAge) {
                this.isRipe = true;
            }
        }
        handleInfestation() {
            if (this.isInfested) {
                this.health -= 1;
            }
        }
        reduceWaterLevel() {
            this.waterLevel -= this.waterConsumtion;
        }
        reduceDungLevel() {
            this.dungLevel -= this.dungConsumtion;
        }
        checkPlantHealth() {
            if (this.waterLevel <= 0 || this.waterLevel >= 120 || this.dungLevel <= 0 || this.dungLevel >= 120 || this.health <= 0) {
                this.isDead = true;
            }
        }
    }
    GardenSimulator.Plant = Plant;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Plant.js.map