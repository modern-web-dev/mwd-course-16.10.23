const myNumbers = [12, 34, 45, 78, 45];


// map, filter, reduce
const total = myNumbers
    .map(addTax)
    .filter(onlyGreaterThanTwenty)
    .reduce((sum, myCurrentNumber) => sum + myCurrentNumber, 0);

console.log(total);

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    const myCurrentNumber = addTax(myNumbers[i]);
    if (onlyGreaterThanTwenty(myCurrentNumber)) {
        sum += myCurrentNumber;
    }
}

console.log(sum);

function addTax(value) {
    return value + 5;
}

function onlyGreaterThanTwenty(value) {
    return value > 20;
}
