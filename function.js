var rollDie = function(dieSize){
    console.log('Rolling...');
    var value = Math.ceil( dieSize * Math.random() );
    return value;
}

var firstDice = rollDie(6);
console.log(firstDice);

var secondDice = rollDie(6);
console.log(secondDice);

var result = firstDice + secondDice;
console.log('You rolled');
console.log(result);