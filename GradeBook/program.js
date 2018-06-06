let book = require("./lib/grades").book;
let express = require("express");
let app = express();

app.get("/",function(req,res){
    res.send("Hello, World!!!");
});

app.get("/grade",function(req,res){
    var grades = req.query.grades.split(",");
    grades.forEach(element => {
        book.addGrade(parseInt(element));
    });
    res.send('Average is: ' + book.getAverage() + '<br\>Grade: ' + book.getLetterGrade());
});

app.listen(3000);
console.log("Server running...");

/* for(i=2;i<process.argv.length;i++){
    book.addGrade(parseInt(process.argv[i]));
}

console.log(book.getAverage()); */
