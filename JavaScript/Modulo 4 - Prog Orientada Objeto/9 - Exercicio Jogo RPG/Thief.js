const Character = require("./Character")

class Thief extends Character{
    attackCommand(target){
        target.hp -= (this.attackPoints - target.defensePoints) * 2
    }
}

module.exports = Thief;