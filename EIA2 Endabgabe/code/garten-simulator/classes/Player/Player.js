"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    let PlayerAction;
    (function (PlayerAction) {
        PlayerAction["PLANT"] = "Einpflanzen";
        PlayerAction["WATER"] = "Gie\u00DFen";
        PlayerAction["DUNG"] = "D\u00FCngen";
        PlayerAction["HARVEST"] = "Ernten";
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
        setSelectedSeed(_seedName) {
            switch (_seedName) {
                case "carrot":
                    this.selectedSeed = GardenSimulator.Seed.CARROT;
                    break;
                case "tomato":
                    this.selectedSeed = GardenSimulator.Seed.TOMATO;
                    break;
            }
        }
    }
    GardenSimulator.Player = Player;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Player.js.map