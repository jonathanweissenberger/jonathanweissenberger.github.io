"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Market {
        constructor() {
            this.carrotSeed = 0;
            this.onionSeed = 0;
            this.saladSeed = 0;
            this.radishSeed = 0;
            this.cornSeed = 0;
            this.carrotPlant = 0;
            this.onionPlant = 0;
            this.saladPlant = 0;
            this.radishPlant = 0;
            this.cornPlant = 0;
            this.dungPrice = 0;
            this.pesticidePrice = 0;
        }
        handleRandomMarketPrices() {
            const min = 1;
            let max = GardenSimulator.economyVariationMax;
            this.carrotSeed = this.createSmallRandomeNumber(min, max);
            this.onionSeed = this.createSmallRandomeNumber(min, max);
            this.saladSeed = this.createSmallRandomeNumber(min, max);
            this.radishSeed = this.createSmallRandomeNumber(min, max);
            this.cornSeed = this.createSmallRandomeNumber(min, max);
            const seedPrices = {
                carrot: this.carrotSeed,
                onion: this.onionSeed,
                salad: this.saladSeed,
                radish: this.radishSeed,
                corn: this.cornSeed
            };
            this.carrotPlant = this.createRandomeNumber(min, max);
            this.onionPlant = this.createRandomeNumber(min, max);
            this.saladPlant = this.createRandomeNumber(min, max);
            this.radishPlant = this.createRandomeNumber(min, max);
            this.cornPlant = this.createRandomeNumber(min, max);
            const plantPrices = {
                carrot: this.carrotPlant,
                onion: this.onionPlant,
                salad: this.saladPlant,
                radish: this.radishPlant,
                corn: this.cornPlant
            };
            this.dungPrice = this.createSmallRandomeNumber(min, max);
            this.pesticidePrice = this.createSmallRandomeNumber(min, max);
            GardenSimulator.updateMarketPricesDisplay(seedPrices, plantPrices, this.dungPrice, this.pesticidePrice);
        }
        getCurrentPlantValue(_seedType) {
            switch (_seedType) {
                case GardenSimulator.Seed.CARROT:
                    return this.carrotPlant;
                case GardenSimulator.Seed.ONION:
                    return this.onionPlant;
                case GardenSimulator.Seed.SALAD:
                    return this.saladPlant;
                case GardenSimulator.Seed.RADISH:
                    return this.radishPlant;
                case GardenSimulator.Seed.CORN:
                    return this.cornPlant;
            }
        }
        getCurrentSeedValue(_seedType) {
            switch (_seedType) {
                case GardenSimulator.Seed.CARROT:
                    return this.carrotSeed;
                case GardenSimulator.Seed.ONION:
                    return this.onionSeed;
                case GardenSimulator.Seed.SALAD:
                    return this.saladSeed;
                case GardenSimulator.Seed.RADISH:
                    return this.radishSeed;
                case GardenSimulator.Seed.CORN:
                    return this.cornSeed;
            }
        }
        getCurrentDungValue() {
            return this.dungPrice;
        }
        getCurrentPesticideValue() {
            return this.pesticidePrice;
        }
        createRandomeNumber(_min, _max) {
            return Math.floor(Math.random() * (_max - _min + 1) + _min);
        }
        createSmallRandomeNumber(_min, _max) {
            return Math.floor(Math.random() * (_max - _min + 1) + _min) / 2;
        }
    }
    GardenSimulator.Market = Market;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Market.js.map