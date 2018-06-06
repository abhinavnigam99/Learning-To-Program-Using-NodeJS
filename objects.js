var dice = require('./objectSplit');
var die = dice.game;

console.log(dice);
die.size = 6;
console.log('Roll : ' + die.rollDie());
console.log('Roll : ' + die.rollDie());
console.log('Roll : ' + die.rollDie());
console.log('Roll : ' + die.rollDie());
console.log('Total Rolls : ' + die.totalRolls);