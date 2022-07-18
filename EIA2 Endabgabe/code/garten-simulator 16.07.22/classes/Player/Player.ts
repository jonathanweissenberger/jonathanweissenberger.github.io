namespace GardenSimulator {

    export enum PlayerAction {
        PLANT = "Einpflanzen",
        WATER = "Gießen",
        DUNG = "Düngen",
        HARVEST = "Ernten"
    }

    export class Player {

        public name: string = "Player 1";
        public selectedSeed: Seed | null = null;
        public currentAction: PlayerAction | null = null;
        private money: number;

        constructor(_startMoney: number) {
            this.money = _startMoney;
        }

        public setMoney(_money: number, _isAdding: boolean): void {
            if (_isAdding) {
                this.money += _money;
            } else {
                this.money -= _money;
            }
            
            updateDisplayAmountOfMoney(this.money)
        }

        public setSelectedSeed(_seedName: string): void {
            switch (_seedName) {
                case "carrot":
                    this.selectedSeed = Seed.CARROT
                    break;
                case "tomato":
                    this.selectedSeed = Seed.TOMATO
                    break;
            }
        }
    }

}