const kodomAli = {
    name: 'kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + ' is participating the exam';
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
const output = kodomAli.exam();

const badamAli = {
    name: 'Kacha Badam',
    money: 8000,
}
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2)
const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40)
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);
const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);