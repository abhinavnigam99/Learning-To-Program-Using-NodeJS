var rollDie = function(dieSize){
    console.log('Rolling...');
    var value = Math.ceil( dieSize * Math.random() );
    return value;
}

var roll = rollDie(6);

if(roll>4){node
    console.log("Great Roll!!!");
}
console.log('You rolled a ' + roll);