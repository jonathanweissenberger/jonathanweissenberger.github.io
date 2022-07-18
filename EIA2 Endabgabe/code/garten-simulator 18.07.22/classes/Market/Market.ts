namespace GardenSimulator {

    export interface SeedPrices {
        carrot: number,
        onion: number,
        salad: number,
        radish: number,
        corn: number
    }

    export interface PlantPrices {
        carrot: number,
        onion: number,
        salad: number,
        radish: number,
        corn: number
    }

    export class Market {

            private carrotSeed: number = 0;
            private onionSeed: number = 0;
            private saladSeed: number = 0;
            private radishSeed: number = 0;
            private cornSeed: number = 0;
            private carrotPlant: number = 0;
            private onionPlant: number = 0;
            private saladPlant: number = 0;
            private radishPlant: number = 0;
            private cornPlant: number = 0;
            private dungPrice: number = 0;
            private pesticidePrice: number = 0;


            constructor() {

            }

            public handleRandomMarketPrices(): void {
                const min = 1;
                let max = economyVariationMax;
                this.carrotSeed = this.createSmallRandomeNumber(min, max);
                this.onionSeed = this.createSmallRandomeNumber(min, max);
                this.saladSeed = this.createSmallRandomeNumber(min, max);
                this.radishSeed = this.createSmallRandomeNumber(min, max);
                this.cornSeed = this.createSmallRandomeNumber(min, max);

                const seedPrices: SeedPrices = {
                    carrot: this.carrotSeed,
                    onion: this.onionSeed,
                    salad: this.saladSeed,
                    radish: this.radishSeed,
                    corn: this.cornSeed
                }

                this.carrotPlant = this.createRandomeNumber(min, max);
                this.onionPlant = this.createRandomeNumber(min, max);
                this.saladPlant = this.createRandomeNumber(min, max);
                this.radishPlant = this.createRandomeNumber(min, max);
                this.cornPlant = this.createRandomeNumber(min, max);

                const plantPrices: PlantPrices = {
                    carrot: this.carrotPlant,
                    onion: this.onionPlant,
                    salad: this.saladPlant,
                    radish: this.radishPlant,
                    corn: this.cornPlant
                }

                this.dungPrice = this.createSmallRandomeNumber(min, max);
                this.pesticidePrice = this.createSmallRandomeNumber(min, max);

                updateMarketPricesDisplay(seedPrices, plantPrices, this.dungPrice, this.pesticidePrice);
            }

            public getCurrentPlantValue(_seedType: Seed): number {
                switch (_seedType) {
                    case Seed.CARROT:
                        return this.carrotPlant;
                    case Seed.ONION:
                        return this.onionPlant;
                    case Seed.SALAD:
                        return this.saladPlant;
                    case Seed.RADISH:
                        return this.radishPlant;
                    case Seed.CORN:
                        return this.cornPlant;
                }
            }

            public getCurrentSeedValue(_seedType: Seed): number {
                switch (_seedType) {
                    case Seed.CARROT:
                        return this.carrotSeed;
                    case Seed.ONION:
                        return this.onionSeed;
                    case Seed.SALAD:
                        return this.saladSeed;
                    case Seed.RADISH:
                        return this.radishSeed;
                    case Seed.CORN:
                        return this.cornSeed;
                }
            }

            public getCurrentDungValue(): number {
                return this.dungPrice;
            }

            public getCurrentPesticideValue(): number {
                return this.pesticidePrice;
            }

            private createRandomeNumber(_min: number, _max: number): number {
                return Math.floor(Math.random() * (_max - _min + 1) + _min)
            }

            private createSmallRandomeNumber(_min: number, _max: number): number {
                return Math.floor(Math.random() * (_max - _min + 1) + _min) / 2
            }
    }

}