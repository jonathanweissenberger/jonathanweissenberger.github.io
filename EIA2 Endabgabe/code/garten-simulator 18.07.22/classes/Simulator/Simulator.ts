namespace GardenSimulator {
    
    export class Simulator{

        protected static updateTime: number = 2000;
        private static bugs: Bug[] = [];
        

        public static start(): void {
            setInterval(this.loopCycle, Simulator.updateTime);
        }

        private static loopCycle(): void {
            market.handleRandomMarketPrices();
            ctx.resetTransform();
            ctx.clearRect(0, 0, 1000, 400);
            for (let field of gardenFields) {
                field.handleField(Simulator.updateTime);
            }
            Simulator.randomInfestation();
        }  

        private static randomInfestation(): void {

            const rndNumber: number = Math.floor(Math.random() * (40 - 0 + 1) + 0);
            if (rndNumber < gardenFields.length && gardenFields[rndNumber].plant != null) {
                const plant: Plant = <Plant>gardenFields[rndNumber].plant;
                if (plant.isInfested == false && plant.isInfesting == false) {                      
                    this.bugs.push(new Bug(rndNumber));
                    plant.isInfesting = true;
                }
            } 
            let counter: number = 0;
            for (let bug of this.bugs) {
                if (gardenFields[bug.targetField].plant == null) {
                    Simulator.bugs.splice(counter, 1);
                    counter--;
                } else if (bug.hasArrived) {
                    Simulator.bugs.splice(counter, 1);
                    counter--;
                }
                bug.drawBug(50);
                counter++;
            }
        }  
    }
}