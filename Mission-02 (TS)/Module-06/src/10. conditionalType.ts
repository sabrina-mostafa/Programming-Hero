
// Conditional Type

type RichPeopleVehicles = {
    car: string;
    bike: string;
    ship: string
}

type CheckVehicles <T> = T extends keyof RichPeopleVehicles ? true : false

type hasVehicle1 = CheckVehicles<"cng">
type hasVehicle2 = CheckVehicles<"ship">
