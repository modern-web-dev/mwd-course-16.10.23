const person = {
    'first-name': 'Marek',
    age: 0,
    address: {
        street: 'Legnicka',
        city: 'Wrocław'
    }
};
person.lastName = 'Matczak';
delete person['first-name']
person.lastName = 'Kowalski';
delete person.address;
// delete person.age;

// falsy: undefined, false, 0, null, NaN, ''

console.log(person.age ?? '');

// console.log(
//     person?.address?.city
// );
