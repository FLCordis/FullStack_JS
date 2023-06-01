const Character = require("./Character");

class Mage extends Character{
    constructor(name, hp, attackPoints, defensePoints, magicPoints){
        super(name, hp, attackPoints, defensePoints)
        this.magicPoints = magicPoints;
    }

    attackCommand(target){
        target.hp -= (this.attackPoints + this.magicPoints) - target.defensePoints
    }

    healCommand(target){
        target.hp += (2 * this.magicPoints);
    }
}

module.exports = Mage;