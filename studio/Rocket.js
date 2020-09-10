"use strict";
exports.__esModule = true;
exports.Astronaut = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var tally = 0;
        for (var i = 0; i < items.length; i++) {
            tally = items[i]["massKg"] + tally;
        }
        return tally;
    };
    Rocket.prototype.currentMassKg = function () {
        var astroMass = this.sumMass(this.astronauts);
        var cargMass = this.sumMass(this.cargoItems);
        return cargMass + astroMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(this.cargoItems)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(this.astronauts)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
;
var Astronaut = /** @class */ (function () {
    function Astronaut() {
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
