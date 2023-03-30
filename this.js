const kodomAli = {
    name: 'kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        console.log(this);
        return this.name + ' is participating the exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}
kodomAli.exam();

const badamAli = {
    name: 'Kacha Badam',
    money: 8000,
}
badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log(this);
}

document.getElementById('click-me').addEventListener('click', function () {
    console.log(this);
})