namespace GardenSimulator {

    export enum Seed {
        CARROT,
        TOMATO
    }

    export class Plant {

        public name: string;
        public waterLevel: number = 100;
        public waterConsumtion: number;
        public dungConsumtion: number;
        public dungLevel: number = 100;
        public currentAge: number = 0;
        public finalAge: number;
        public isRipe: boolean = false;
        public isDead: boolean = false;
        public color: string;

        public constructor(_name: string, _waterConsumtion: number, _dungConsumtion: number, _finalAge: number, _color: string) {
            this.name = _name;
            this.waterConsumtion = _waterConsumtion;
            this.dungConsumtion = _dungConsumtion;
            this.finalAge = _finalAge;
            this.color = _color;
        };

        public handleGrowProcess(_time: number): void {
            this.handlePlantAge(_time);
            this.reduceWaterLevel();
            this.reduceDungLevel();
            this.checkPlantHealth();
        }

        public harvestPlant(): void {
            if (this.isRipe) {
                player.setMoney(10, true)
            } 
        }

        private handlePlantAge(_time: number): void {
            console.log(_time)
            this.currentAge += _time;
            if (this.currentAge >= this.finalAge) {
                this.isRipe = true;
            } 
        }

        private reduceWaterLevel(): void {
            this.waterLevel -= this.waterConsumtion;
        }
        private reduceDungLevel(): void {
            this.dungLevel -= this.dungConsumtion;
        }

        private checkPlantHealth(): void  {
            if (this.waterLevel <= 0 || this.waterLevel >= 120 || this.dungLevel <= 0 || this.dungLevel >= 120) {
                this.isDead = true;
            }
        }

        


    }

}