namespace GardenSimulator {

    export class Carrot extends Plant {

        constructor() {
            super(
                "carotte",
                2,
                1,
                5000,
                "orange",
                Seed.CARROT
            )
        }
    }
}