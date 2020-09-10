
class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: object[];
    astronauts: object[];
    constructor (massKg: number,name: string) {
        this.massKg = massKg;
        this.name = name;
    }

    sumMass( items: Payload[] ): number {   
        let tally: number = 0;
        for (let i = 0; i < items.length;i++) {
            tally = items[i]["massKg"] + tally;
        }
        return tally;
    }

    currentMassKg(): number {
        let astroMass: number = this.sumMass(this.astronauts);
        let cargMass: number = this.sumMass(this.cargoItems);
        return cargMass + astroMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(this.cargoItems)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(this.astronauts)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }        
    }
};

export class Astronaut { }