namespace GardenSimulator {

    export class Salad extends Plant {

        constructor() {
            super(
                "salad",
                2,
                5,
                40000,
                "green",
                Seed.SALAD
            )
        }
    }
}