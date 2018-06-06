var die = {
    size : 6,
    totalRolls: 0,
    rollDie : function(){
        var value = Math.ceil( this.size * Math.random() );
        this.totalRolls++;
        return value;
    }
};

exports.game = die;