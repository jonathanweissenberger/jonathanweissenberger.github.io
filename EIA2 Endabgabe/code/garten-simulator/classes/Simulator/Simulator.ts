namespace GardenSimulator {
    
    export class Simulator{

        public static gameTime: number = 0;
        protected static updateTime: number = 2000;

        public static start(): void {
            setInterval(this.loopCycle, Simulator.updateTime);
        }

        private static loopCycle(): void {
            Simulator.gameTime += Simulator.updateTime / 1000;
            ctx.resetTransform();
            ctx.clearRect(0, 0, 1000, 400);
            for (let field of gardenFields) {
                field.handleField(Simulator.updateTime);
            }
        }   
    }
}