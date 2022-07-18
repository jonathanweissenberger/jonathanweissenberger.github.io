namespace GardenSimulator {

    export enum Seed {
        CARROT,
        ONION,
        SALAD,
        RADISH,
        CORN
    }

    export class Plant {

        public name: string;
        public waterLevel: number = 100;
        public dungLevel: number = 100;
        public currentAge: number = 0;
        public health: number = 100;
        public finalAge: number;
        public isRipe: boolean = false;
        public isDead: boolean = false;
        public isInfested: boolean = false;
        public isInfesting: boolean = false;
        public color: string;
        public seedType: Seed;
        private waterConsumtion: number;
        private dungConsumtion: number;


        public constructor(_name: string, _waterConsumtion: number, _dungConsumtion: number, _finalAge: number, _color: string, _seedType: Seed) {
            this.name = _name;
            this.waterConsumtion = _waterConsumtion;
            this.dungConsumtion = _dungConsumtion;
            this.finalAge = _finalAge;
            this.color = _color;
            this.seedType = _seedType;
        };

        public handleGrowProcess(_time: number): void {
            this.handlePlantAge(_time);
            this.reduceWaterLevel();
            this.reduceDungLevel();
            this.handleInfestation();
            this.checkPlantHealth();
        }

        public harvestPlant(): void {
            if (this.isRipe && !this.isInfested) {
                let money: number;
                money = market.getCurrentPlantValue(this.seedType);
                player.setMoney(money, true);
            } 
        }

        private handlePlantAge(_time: number): void {
            this.currentAge += _time;
            if (this.currentAge >= this.finalAge) {
                this.isRipe = true;
            } 
        }

        private handleInfestation(): void {
            if (this.isInfested) {
                this.health -= 1;
            }
        }

        private reduceWaterLevel(): void {
            this.waterLevel -= this.waterConsumtion;
        }
        private reduceDungLevel(): void {
            this.dungLevel -= this.dungConsumtion;
        }

        private checkPlantHealth(): void  {
            if (this.waterLevel <= 0 || this.waterLevel >= 120 || this.dungLevel <= 0 || this.dungLevel >= 120 || this.health <= 0) {
                this.isDead = true;
            }
        }
    }
}