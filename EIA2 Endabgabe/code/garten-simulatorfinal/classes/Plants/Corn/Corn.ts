namespace GardenSimulator {

    export class Corn extends Plant {

        constructor() {
            super(
                "corn",
                2,
                2,
                70000,
                "yellow",
                Seed.CORN
            )
        }
    }
}