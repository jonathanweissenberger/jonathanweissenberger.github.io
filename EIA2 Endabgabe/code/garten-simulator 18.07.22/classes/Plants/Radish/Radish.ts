namespace GardenSimulator {

    export class Radish extends Plant {

        constructor() {
            super(
                "radish",
                2,
                2,
                50000,
                "red",
                Seed.RADISH
            )
        }
    }
}