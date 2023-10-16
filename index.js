class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    letMeIntroduceMyself() {
        setTimeout(() => this.doSomethingImportant(), 1000);
        return `Hello, my name is ${this.firstName},
        I am ${this.age}`;
    }

    doSomethingImportant() {
        console.log(`Hello from setTimeout: ${this.firstName}`);
    }

    // doSomethingImportant = () => {
    //     console.log(`Hello from setTimeout: ${this.firstName}`);
    // }
}

const person = new Person('Marek', 44);

// doSomethingImportant = () => {
//     console.log(`Hello from setTimeout: ${this.firstName}`);
// }

console.log(person.letMeIntroduceMyself());

// function add(a, b) {
//     // console.log(this);
//     return a + b;
// }
//
// console.log(add.apply(null, [1, 3]));
// console.log(add.call(null, 1, 3));
