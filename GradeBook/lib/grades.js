let gradeBook = {
    _grades: [],
    addGrade: function (newGrade) {
        this._grades.push(newGrade);
    },
    getCountOfGrades: function () {
        return this._grades.length;
    },
    getAverage: function () {
        let total = 0;
        this._grades.forEach(element => {
            total += element;
        });
        let avg = total / this._grades.length;
        return avg;
    },
    reset: function () {
        this._grades = [];
    },
    getLetterGrade: function () {
        let avg = this.getAverage();
        if (avg >= 90) {
            return 'A';
        } else if (avg >= 80) {
            return 'B';
        } else if (avg >= 70) {
            return 'C';
        } else if (avg >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
};

exports.book = gradeBook;