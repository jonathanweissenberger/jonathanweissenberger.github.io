"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    let PlayerAction;
    (function (PlayerAction) {
        PlayerAction["PLANT"] = "Einpflanzen";
        PlayerAction["WATER"] = "Gie\u00DFen";
        PlayerAction["DUNG"] = "D\u00FCngen";
        PlayerAction["HARVEST"] = "Ernten";
        PlayerAction["PESTICIDE"] = "Pestizide";
    })(PlayerAction = GardenSimulator.PlayerAction || (GardenSimulator.PlayerAction = {}));
    class Player {
        constructor(_startMoney) {
            this.name = "Player 1";
            this.selectedSeed = null;
            this.currentAction = null;
            this.money = _startMoney;
        }
        setMoney(_money, _isAdding) {
            if (_isAdding) {
                this.money += _money;
            }
            else {
                this.money -= _money;
            }
            GardenSimulator.updateDisplayAmountOfMoney(this.money);
        }
        handleBuyProdukt(_costs) {
            if ((this.money - _costs) >= 1) {
                this.setMoney(_costs, false);
                return true;
            }
            else {
                return false;
            }
        }
        setSelectedSeed(_seedName) {
            switch (_seedName) {
                case "carrot":
                    this.selectedSeed = GardenSimulator.Seed.CARROT;
                    break;
                case "onion":
                    this.selectedSeed = GardenSimulator.Seed.ONION;
                    break;
                case "radish":
                    this.selectedSeed = GardenSimulator.Seed.RADISH;
                    break;
                case "salad":
                    this.selectedSeed = GardenSimulator.Seed.SALAD;
                    break;
                case "corn":
                    this.selectedSeed = GardenSimulator.Seed.CORN;
                    break;
            }
        }
    }
    GardenSimulator.Player = Player;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Player.js.map