let book = require('../lib/grades').book;

exports["setUp"] = function(callback){
    book.reset();
    callback();
};

exports["Can add new grade"] = function(test){
    book.addGrade(90);

    let count = book.getCountOfGrades();
    test.equal(count,1);
    test.done();
};

exports["Can average grades"] = function(test){
    book.addGrade(60);
    book.addGrade(70);
    book.addGrade(80);
    book.addGrade(90);

    let average = book.getAverage();

    test.equal(average,75);
    test.done();
};

exports["Can compute letter grade of A"] = function(test){
    book.addGrade(90);
    book.addGrade(100);

    var result = book.getLetterGrade();

    test.equal(result,'A');
    test.done();
}

exports['Can compute letter grade of B'] = function(test){
    book.addGrade(70);
    book.addGrade(90);

    var result = book.getLetterGrade();

    test.equal(result,'B');
    test.done();
}

exports["Can compute letter grade of C"] = function(test){
    book.addGrade(70);
    book.addGrade(74);

    var result = book.getLetterGrade();

    test.equal(result,'C');
    test.done();
}

exports["Can compute letter grade of D"] = function(test){
    book.addGrade(60);
    book.addGrade(70);

    var result = book.getLetterGrade();

    test.equal(result,'D');
    test.done();
}

exports["Can compute letter grade of F"] = function(test){
    book.addGrade(30);
    book.addGrade(50);

    var result = book.getLetterGrade();

    test.equal(result,'F');
    test.done();
}