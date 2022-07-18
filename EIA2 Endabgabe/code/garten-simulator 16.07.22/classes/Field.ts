namespace GardenSimulator {

    export class Field {

        fieldSize: number = 100;
        plant: Plant | null = null;
        positionX: number;
        positionY: number;

        public constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX;
            this.positionY = _positionY;
        }

        public handleField(_time: number): void {
            this.handlePlantGrowProcess(_time);
            this.drawField();
        }

        public checkIfClicked(_mousePositionX: number, _mousePositionY: number): boolean {
            _mousePositionX -= this.fieldSize;
            _mousePositionY -= this.fieldSize;
            if (_mousePositionX < this.positionX * this.fieldSize && _mousePositionX > this.positionX * this.fieldSize - this.fieldSize && _mousePositionY < this.positionY * this.fieldSize && _mousePositionY > this.positionY * this.fieldSize -this.fieldSize) {

                if (player.currentAction == PlayerAction.PLANT) {
                    switch (player.selectedSeed) {                
                        case Seed.CARROT:
                            this.plant = new Carrot();
                            break;
                        case Seed.TOMATO:
                            this.plant = new Tomato();
                            break;
                    }
                } else if (player.currentAction == PlayerAction.WATER && this.plant != null) {
                    this.plant.waterLevel += 10;
                } else if (player.currentAction == PlayerAction.HARVEST && this.plant != null) {
                    this.plant.harvestPlant();
                    this.plant = null;
                } else if (player.currentAction == PlayerAction.DUNG && this.plant != null) {
                    this.plant.dungLevel += 10;
                }
                

                if (this.plant === null) {

                }

                return true;
            }
            return false;
        }

        private handlePlantGrowProcess(_time: number): void {
            if (this.plant != null) {
                this.plant.handleGrowProcess(_time);
                if (this.plant.isDead == true) {
                    this.plant = null;
                }
            }
        }

        private drawField(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            ctx.beginPath();
            ctx.rect(0, 0, this.fieldSize, this.fieldSize);
            ctx.stroke();

            if (this.plant != null) {
                console.log(this.plant)
                this.drawPlant(this.plant.color);
            }
        }

        private drawPlant(_color: string): void {
            ctx.resetTransform();
            ctx.translate(this.positionX * this.fieldSize, this.positionY * this.fieldSize);
            ctx.beginPath();
            ctx.rect(0, 0, this.fieldSize / 2, this.fieldSize /2);
            ctx.strokeStyle = _color;
            ctx.stroke();
            ctx.strokeStyle = "#000";
        }

    }

}


