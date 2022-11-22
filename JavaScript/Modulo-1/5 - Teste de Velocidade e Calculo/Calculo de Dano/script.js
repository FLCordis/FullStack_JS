alert("Calculador de Dano entre personagens, primeiro insira os dados do seu personagem e em seguida do adversário.")

const charName = prompt("Insira o nome do personagem: ")
const attackPower = prompt("Insira o poder de ataque do personagem: ")

alert("Agora para os dados do outro personagem.")

const opponentName = prompt("Insira o nome do oponente: ")
let lifePoints = prompt("Insira a quantidade de vida: ")
const defensePoints = prompt("Insira os pontos de defesa: ")
const hasShield = prompt("Possui escudo?")

let damagePoints = 0

if(attackPower > defensePoints && hasShield === "Não"){
    damagePoints = attackPower - defensePoints
    alert(charName + " causou " + damagePoints + " de dano no adversário " + opponentName)
} else if(attackPower > defensePoints && hasShield === "Sim"){
    damagePoints = (attackPower - defensePoints)/2
    alert(charName + " causou " + damagePoints + " de dano no adversário " + opponentName)
} else if(attackPower <= defensePoints){
    damagePoints = 0
    alert(charName + " não causou dano em " + opponentName + "!")
}

lifePoints -= damagePoints

alert(
    charName + "\nPoder de Ataque: " + attackPower + "\n\n" +
    opponentName + "\nPontos de Defesa: " + defensePoints +
    "\nEscudo: " + hasShield + "\n\n" +
    "Dano recebido: " + damagePoints +
    "\nVida total: " + lifePoints
)