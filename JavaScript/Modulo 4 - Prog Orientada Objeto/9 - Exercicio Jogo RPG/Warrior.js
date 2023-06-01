const Character = require("./Character");

// A classe possui 2 atributos novos e um estilo de combate diferente.
class Warrior extends Character{
    constructor(name, hp, attackPoints, defensePoints, shieldPoints){
        super(name, hp, attackPoints, defensePoints);
        this.shieldPoints = shieldPoints;
        this.stance = 'attacking';
    }
    // O Guerreiro só pode atacar se estiver na forma correta, sobrescrevendo o método.
    attackCommand(target){
        if(this.stance === 'attacking'){
            super.attackCommand(target);
        }
    }
    // Verifica a forma de combate e caso for uma, ele troca para a outra,
    // só podendo atacar em forma de ataque.
    changeStance(){
        if (this.stance === 'attacking' ){
            this.stance = 'defending';
            this.defensePoints += this.shieldPoints;
        } else {
            this.stance = 'attacking';
            this.defensePoints -= this.shieldPoints;
        }
    }
}

module.exports = Warrior;