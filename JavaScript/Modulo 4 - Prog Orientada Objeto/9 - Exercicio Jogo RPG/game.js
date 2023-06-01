const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arkansas = new Mage('Arkansas, the Greybeard', 90, 4, 2, 14);
const khajiin = new Thief('Khajiin, the Shadow', 140, 22, 8);
const wolfgang = new Warrior('Wolfgang, the Wall', 200, 14, 12, 4);

console.log('Char Creation')
console.table({arkansas, khajiin, wolfgang})

wolfgang.changeStance();
arkansas.attackCommand(wolfgang);
khajiin.attackCommand(arkansas);

console.log('\nChar First Battle')
console.table({arkansas, khajiin, wolfgang})

wolfgang.attackCommand(khajiin);
wolfgang.changeStance();
wolfgang.attackCommand(khajiin);
arkansas.healCommand(arkansas);

console.log('\nChar Second Battle')
console.table({arkansas, khajiin, wolfgang})