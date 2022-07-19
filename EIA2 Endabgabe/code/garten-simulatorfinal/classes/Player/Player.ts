namespace GardenSimulator {

    export enum PlayerAction {
        PLANT = "Einpflanzen",
        WATER = "Gießen",
        DUNG = "Düngen",
        HARVEST = "Ernten",
        PESTICIDE = "Pestizide"
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

        public handleBuyProdukt(_costs: number): boolean {
            
            if ((this.money - _costs) >= 1) {
                this.setMoney(_costs, false);
                return true;
            } else {
                return false;
            }
        }

        public setSelectedSeed(_seedName: string): void {
            switch (_seedName) {
                case "carrot":
                    this.selectedSeed = Seed.CARROT
                    break;
                case "onion":
                    this.selectedSeed = Seed.ONION
                    break;
                case "radish":
                    this.selectedSeed = Seed.RADISH
                    break;
                case "salad":
                    this.selectedSeed = Seed.SALAD
                    break;
                case "corn":
                    this.selectedSeed = Seed.CORN
                    break;
            }
        }
    }

}