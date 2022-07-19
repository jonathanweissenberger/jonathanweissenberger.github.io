namespace GardenSimulator {

    export class Bug {

        public hasArrived: boolean = false;
        public targetField: number;
        private bugPositionX: number = 0;
        private bugPositionY: number = 0;


        constructor(_targetField: number) {
            this.targetField = _targetField;
        }

        public drawBug(_time: number): void {

            if (this.bugPositionX < gardenFields[this.targetField].positionX * gardenFields[this.targetField].fieldSize) {
                this.bugPositionX += _time;
            } else if (this.bugPositionY < gardenFields[this.targetField].positionY * gardenFields[this.targetField].fieldSize) {
                this.bugPositionY += _time;
            } else {
                const plant: Plant = <Plant>gardenFields[this.targetField].plant;
                plant.isInfested = true;
                plant.isInfesting = false;
                this.hasArrived = true;
            }
            ctx.resetTransform();
            ctx.translate(this.bugPositionX + 10, this.bugPositionY);
            ctx.beginPath();
            ctx.fillStyle = "purple";
            ctx.fillRect(0, 0, 10, 10);
            ctx.stroke();

        }

    }

}