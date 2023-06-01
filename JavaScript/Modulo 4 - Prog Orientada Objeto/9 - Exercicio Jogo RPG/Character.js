class Character{
    constructor(name, hp, attackPoints, defensePoints){
        this.name = name;
        this.hp = hp;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
    }

    attackCommand(target){
        target.hp -= this.attackPoints - target.defensePoints;
    }
}

module.exports = Character;